import { useEffect, useState } from "react";

function useCurrencyInfo(currency) {
  const [data, setData] = useState({});

  useEffect(() => {
    fetch(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency}.json`
    )
      .then((res) => res.json())
      .then((res) => {
        setData(res[currency] || {}); // store only currency rates
      })
      .catch((err) => console.error("Error fetching currency:", err));
  }, [currency]);

  return data;
}

export default useCurrencyInfo;
