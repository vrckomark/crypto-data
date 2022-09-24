import React from "react";

export default function CoinItem({ data }: any) {
  return (
    <div className="flex bg-gray-800 border-gray-700 mb-10 py-6 mx-10 rounded-xl justify-between items-center px-4">
      <img
        className="w-10 mx-4"
        src={data.image}
        alt={`${data.id}-coin-symbol`}
      />
      <div className="text-white">{data.name}</div>
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
    </div>
  );
}
