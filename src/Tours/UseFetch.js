import { useState, useEffect, useCallback } from "react";
// const url = "https://course-api.com/react-tours-project";

export const UseFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const getTours = useCallback(async () => {
    setLoading(true);
    const response = await fetch(url);
    const tours = await response.json();
    setLoading(false);
    setTours(tours);
  }, [url]);

  useEffect(() => {
    getTours();
  }, [url, getTours]);

  return { loading, tours, setTours, getTours };
};
