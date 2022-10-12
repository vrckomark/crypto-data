/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import logo from "../gecko-logo.svg";
import Select from "react-select";

export default function Layout({ data }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { value: "price_change_percentage_24h", label: "Percentage 24h" },
    { value: "market_cap", label: "Market Cap" },
    { value: "current_price", label: "Current Price" },
  ];

  useEffect(() => {
    if (selectedOption?.value === "price_change_percentage_24h") {
      percentageSort();
    }
    if (selectedOption?.value === "market_cap") {
      marketCapSort();
    }
    if (selectedOption?.value === "current_price") {
      currentPriceSort();
    }
  }, [selectedOption]);

  const percentageSort = () => {
    data.sort((a, b) => {
      let x = a.price_change_percentage_24h;
      let y = b.price_change_percentage_24h;
      return y * y - x * x;
    });
  };

  const marketCapSort = () => {
    data.sort((a, b) => {
      return b.market_cap - a.market_cap;
    });
  };

  const currentPriceSort = () => {
    data.sort((a, b) => {
      return b.current_price - a.current_price;
    });
  };

  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main className="py-8">
        {data && (
          <>
            <div className="w-full flex justify-end pr-6 mb-4">
              <Select
                className="w-1/4 "
                options={options}
                onChange={setSelectedOption}
                value={selectedOption}
              />
            </div>

            {data.map((coinData) => {
              return <CoinItem data={coinData} key={coinData.id} />;
            })}
          </>
        )}
      </main>
      <footer className="flex min-w-screen justify-center items-center py-8 bg-zinc-900 border-t-8 border-gray-700 text-white">
        <img src={logo} alt="coin-gecko-logo" className="w-10" />
        <div className="text-lg text-slate-300 px-4">Powered by CoinGecko</div>
      </footer>
    </>
  );
}
