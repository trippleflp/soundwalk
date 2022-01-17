/* eslint-disable */
import { Sound } from './types';

const baseUrl = 'http://localhost:20001';

const getSoundData = (id: number): Promise<Sound> =>
  fetch(`${baseUrl}/sound/${id}`).then((res) => res.json());

const getSoundFileLink = (id: number): string => `${baseUrl}/file/${id}`;
export { getSoundData, getSoundFileLink };
