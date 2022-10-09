import { API_HOST } from "../utils/constant";
import axios from "axios";
import { endPoint } from "./endPoint";
import { toast } from "react-toastify";

const Add = (values) => {
  const url = `${API_HOST}${endPoint.case}`;
  const data = new FormData();
  data.append("userId", values.userId);
  data.append("place", values.place);
  data.append("cityId", values.cityId);
  data.append("agencyId", values.agencyId);
  data.append("dateInit", values.dateInit.toISOString());
  data.append("dateEnd", values.dateEnd.toISOString());
  data.append("detail", values.detail);
  data.append("title", values.title);
  data.append("status", values.status);

  values.support.forEach((value) => data.append("files", value));

  return axios
    .post(url, data)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const getAll = () => {
  const url = `${API_HOST}${endPoint.case}`;
  return axios
    .get(url)
    .then((response) => {
      return response;
    })
    .catch((error) => {
      return error.response;
    });
};
const apiCases = { Add, getAll };
export default apiCases;
