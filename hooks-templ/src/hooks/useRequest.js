import { useEffect, useState } from "react";

const useRequest = (url) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    setLoading(true);
    setError(false);
    fetch(url)
      .then((data) => data.json())
      .then((data) => {
        setData(data);
      })
      .catch((e) => {
        setError(true);
        console.log("Error fetching data: ", e);
      })
      .finally(() => setLoading(false));
  }, []);

  return { loading, error, data };
};

export default useRequest;
