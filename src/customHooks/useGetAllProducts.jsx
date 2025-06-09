import { useEffect, useState } from "react";
import axios from "axios";
const useGetAllProducts = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data/data.json");
        const result = response.data;
        setData(result);
      } catch (error) {}
    };
    fetchData();
  }, []);
  return data;
};

export default useGetAllProducts;
