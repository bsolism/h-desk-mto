import { API_HOST } from "../utils/constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const Add = (value) => {
  const url = `${API_HOST}${endPoint.case}`;
  return axios
    .post(url, value)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const apiCases = { Add };
export default apiCases;
