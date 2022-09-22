import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";

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
        console.log(res.data);
      });
  }
  return (
    <div className="App">
      <div className="text-5xl">
        <h1>TO JE H1</h1>
        <h2>TO JE H2</h2>
      </div>
    </div>
  );
}

export default App;
