import { useState, useEffect } from "react";
import { apiCity } from "../../../services";

const useHookCase = () => {
  const [localities, setLocalities] = useState([]);

  const getLocalities = () => {
    apiCity.GetAll().then((response) => {
      if (response.status === 200) {
        setLocalities(response.data);
      }
    });
  };

  return [localities, getLocalities];
};

export default useHookCase;
