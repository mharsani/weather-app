import urlHistory from './index';
import Key from '../auth/signature';

const endpointHistory = urlHistory;

const endpointGetListHistory = (city, startDate, endDate) =>
  `${endpointHistory}?city=${city}&start_date=${startDate}&end_date=${endDate}&tz=local&key=${Key}`;
  
export default endpointGetListHistory
