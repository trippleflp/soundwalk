/* eslint-disable */
import { Sound } from './types';

const baseUrl = 'https://send-map.com/api';

const getSoundData = (id: number): Promise<Sound> =>
  fetch(`${baseUrl}/sound/${id}`).then((res) => res.json());

const getSoundFileLink = (id: number): string => `${baseUrl}/file/${id}`;
export { getSoundData, getSoundFileLink };
