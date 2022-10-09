import { API_HOST } from "../utils/constant";
import axios from "axios";
import { endPoint } from "./endPoint";

const GetAll = () => {
  const url = `${API_HOST}${endPoint.city}`;
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};

const apiCity = { GetAll };
export default apiCity;
