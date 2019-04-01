import { urlCurrent } from './index';
import key from '../auth/signature';

const endpointCurrent = urlCurrent;

const endpointGetCurrent = (city) =>
  `${endpointCurrent}?city=${city}&key=${key}`;
  
export default endpointGetCurrent;
