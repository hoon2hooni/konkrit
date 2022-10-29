import { useState, useEffect } from "react";
import axios from "axios";
function useData(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    async function fetchItems() {
      setIsLoading(true);
      setIsError(false);
      try {
        const result = await axios(url);
        setData(result.data);
        setIsLoading(false);
      } catch {
        setIsError(true);
        setIsLoading(false);
      }
    }
    fetchItems();
  }, [url]);
  return { data, isLoading, isError };
}

export default useData;
