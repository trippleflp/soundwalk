import { router, get, post, del } from 'microrouter';
import { send, json, text } from 'micro';
import { getSoundData } from './sounds';
import serveHandler from 'serve-handler';
import corsImport from 'micro-cors';
let cors = corsImport();

const hello = (req, res) => send(res, 200, `Hello ${req.params.who}`);

const sound = (req, res) => {
  const soundData = getSoundData(req.params.id);
  send(res, 200, soundData);
};
const soundFile = (req, res) => {
  const soundData = getSoundData(req.params.id);
  res.writeHead(301, {
    Location: `/api/data/sounds/${soundData.name}.wav`,
  });
  res.end();
};

const finalTrackFile = (req, res) => {
  res.writeHead(301, {
    Location: `/api/data/sounds/final-track.mp3`,
  });
  res.end();
};

export = cors(
  router(
    get('/hello/:who', hello),
    get('/sound/:id', sound),
    get('/file/track', finalTrackFile),
    get('/file/:id', soundFile),
    async (request, response) => {
      await serveHandler(request, response, {
        public: 'data/sounds',
        rewrites: [
          {
            source: '/data/sounds/:id',
            destination: '/:id',
          },
        ],
        redirects: [{ source: '/:id', destination: '/not/found', type: 301 }],
        directoryListing: false,
      });
    }
  )
);
// export = router(get('/hi', hello));
