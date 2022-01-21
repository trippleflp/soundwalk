/* eslint-disable */
import { Sound } from './types';

const baseUrl = 'https://sound-walk.com/api';

const getSoundData = (id: number): Promise<Sound> =>
  fetch(`${baseUrl}/sound/${id}`).then((res) => res.json());

const getSoundFileLink = (id: number): string => `${baseUrl}/file/${id}`;

const getFinalTrackLink = (): string => `${baseUrl}/file/track`;
export { getSoundData, getSoundFileLink, getFinalTrackLink };
