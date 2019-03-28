import axios from 'axios';
import success from '../response/success';
import error from '../response/error';

const serviceGet = async url => {
    try {
      const response = await axios.get(url);
      success(response);
    } catch (err) {
      error(err);
    }
  };

  export default serviceGet;