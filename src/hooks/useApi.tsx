import axios from 'axios';
import { apiBaseUrl } from '../constants/wallet';

const useApi = () => {
  const apiCall = (data: { fromMail: string }) => {
    return new Promise((resolve, reject) => {
      try {
        const config = {
          method: 'POST',
          url: apiBaseUrl,
          data: data,
          headers: {
            'Access-Control-Allow-Origin': '*',
          },
        };

        axios(config)
          .then(function (response) {
            if (response.status === 200) {
              resolve(response);
            }
          })
          .catch(async function (error) {
            console.error(error.message);
            console.error(error?.response?.data);
            resolve({ success: false, error: error?.response?.data?.message??"Oops! Something went wrong while submitting the form." });
          });
      } catch (error) {
        console.error(error.message);
        console.error(error?.response?.data);
        resolve({ success: false, error: error?.response?.data??"Oops! Something went wrong while submitting the form." });
      }
    });
  };
  return { apiCall };
};

export default useApi;
