import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import axios from "axios";

export const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios
            .get(url)
            .then((res) => {
                setData(res.data);
                setLoading(false);
            })
            .catch((err) => setError(err));
    }, [url]);
    return { data, loading, error };
};
