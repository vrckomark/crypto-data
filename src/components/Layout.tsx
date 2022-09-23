import React from "react";
import CoinItem from "./CoinItem";
import logo from "./gecko-logo.svg";

export default function Layout({ data }: any) {
  return (
    <>
      <header>
        <nav></nav>
      </header>
      <main className="py-8">
        {data.map((coinData: any) => {
          return <CoinItem data={coinData} key={coinData.id} />;
        })}
      </main>
      <footer className="flex min-w-screen justify-center py-8 bg-black text-white">
        <img src={logo} alt="coin-gecko-logo" />
        <div>Powered by CoinGecko</div>
      </footer>
    </>
  );
}
