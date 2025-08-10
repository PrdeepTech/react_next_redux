import { useEffect, useState } from "react";

const useFetch = (url:any) => {
  const [customdata, setCustomdata] = useState([]);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((customdata) => setCustomdata(customdata));
  }, [url]);

  return [customdata];
};

export default useFetch;