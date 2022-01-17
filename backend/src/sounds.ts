import { readFileSync } from 'fs';

let rawdata = readFileSync('data/index.json');
let list: Array<Sound> = JSON.parse(rawdata.toString());

const getSoundData = (id: number) => {
  if (id >= list.length) throw Error('invalid id');
  return list[id];
};

export { getSoundData };

export interface Sound {
  name: string;
  longlat: number[];
}
