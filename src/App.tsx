import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import CoinItem from "./components/CoinItem";

function App() {
  const [data, setData] = useState<any>([]);

  useEffect(() => {
    getData();
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
    <div>
      {data.map((coinData: any) => {
        return <CoinItem data={coinData} key={coinData.id} />;
      })}
    </div>
  );
}

export default App;
