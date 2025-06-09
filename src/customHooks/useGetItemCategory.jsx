'use client'
import { useEffect, useState } from 'react'
import axios from 'axios';

const useGetItemCategory = ({ categoryName}) => {
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("/data/data.json");
                const result = response.data;
                const categoryData = result.filter(
                    (item) => item.category === categoryName
                );
                setData(categoryData);
            } catch (error) { }
        };
        fetchData();
    }, []);
    return data
}

export default useGetItemCategory