import React from "react";

export default function CoinItem({ data }: any) {
  return (
    <div className="flex text-base bg-gray-800 border-gray-700 mb-10 py-6 mx-10 rounded-xl justify-start items-center px-4">
      <div className="flex items-center justify-center w-12 mx-12">
        <img
          className="w-10 mx-4"
          src={data.image}
          alt={`${data.id}-coin-symbol`}
        />
        <div className="text-slate-300 px-4">{data.name}</div>
      </div>
      <div className="flex justify-evenly w-full">
        {data.price_change_percentage_24h > 0 ? (
          <div className="text-lime-500 flex flex-col items-center">
            +{Math.round(data.price_change_percentage_24h * 100) / 100}%
            <div className="text-slate-600 text-xs">(24h)</div>
          </div>
        ) : (
          <div className="text-red-600  flex flex-col items-center">
            {Math.round(data.price_change_percentage_24h * 100) / 100}%
            <div className="text-slate-600 text-xs">(24h)</div>
          </div>
        )}
        <div className="text-slate-300 flex flex-col items-center">
          <div>
            ${data.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className="text-slate-600 text-xs">(Market Cap)</div>{" "}
        </div>
        <div className="text-slate-300 flex flex-col items-center">
          <div>
            {data.current_price < 1 && <>{data.current_price}</>}$
            {data.current_price >= 1 &&
              data.current_price
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
          </div>
          <div className="text-slate-600 text-xs">(Price)</div>{" "}
        </div>
      </div>
    </div>
  );
}
