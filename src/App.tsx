import axios from "axios";
import React, { useEffect, useState } from "react";
import Layout from "./components/Layout";
import "./scrollbar.css";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getData();
    const interval = setInterval(() => {
      console.log("fetched data");

      getData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  async function getData() {
    await axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false",
        {
          headers: {
            Accept: "application/json",
          },
        }
      )
      .then((res) => {
        setData(res.data);
      });
  }
  return (
    <div className="bg-gray-900 font-primary">
      <Layout data={data} />
    </div>
  );
}

export default App;
