import React, { useEffect, useState } from "react";
import CoinItem from "./CoinItem";
import logo from "../gecko-logo.svg";

export default function Layout({ data }) {
  if (data) {
    data.sort((a, b) => {
      let x = a.price_change_percentage_24h;
      let y = b.price_change_percentage_24h;
      x = x * x;
      y = y * y;
      return y - x;
    });
  }

  console.log(data);
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main className="py-8">
        {data.map((coinData) => {
          return <CoinItem data={coinData} key={coinData.id} />;
        })}
      </main>
      <footer className="flex min-w-screen justify-center items-center py-8 bg-zinc-900 border-t-8 border-gray-700 text-white">
        <img src={logo} alt="coin-gecko-logo" className="w-10" />
        <div className="text-lg text-slate-300 px-4">Powered by CoinGecko</div>
      </footer>
    </>
  );
}
