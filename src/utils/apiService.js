import Axios from "axios";
import PropTypes from "prop-types";
import Config from "react-native-config";
import showToast from "../common/Toast";
import { CANCEL_REQUEST } from "../store/actions/types";
import { store } from "../store";

const { BASE_URL } = Config;

/**
 * Utility that calls the backend api service
 * @param {String} url: /path/to/api
 * @param {String} type: GET, POST, PUT, PATCH, DELETE
 * @param data
 * @param {Object} headers: { 'Content-Type': '' }
 * @returns {Promise<data>}
 */
const apiService = (url, type, data, headers) => {
  if (!url || typeof url !== "string") {
    store.dispatch({ type: CANCEL_REQUEST });
    throw new Error("Please pass a string url to this function: /path/to/api");
  }
  if (!type || typeof type !== "string") {
    store.dispatch({ type: CANCEL_REQUEST });
    throw new Error(
      "Please add string api request type: GET, POST, PUT, PATCH, DELETE"
    );
  }
  const init = headers || {
    "Content-Type": "application/json",
  };
  return new Promise((resolve, reject) => {
    Axios({
      method: type,
      url: `${BASE_URL}${url}`,
      data,
      headers: init,
    })
      .then(res => {
        resolve(res.data || res);
      })
      // eslint-disable-next-line consistent-return
      .catch(error => {
        if (error && !error.response) {
          showToast(
            "Could not connect to the server, please check your internet connection"
          );
          return store.dispatch({ type: CANCEL_REQUEST });
        }
        reject(error.response.data);
      });
  });
};

apiService.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  headers: PropTypes.object.isRequired,
};

export default apiService;
