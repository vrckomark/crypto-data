import React from "react";

export default function CoinItem({ data }: any) {
  return (
    <div className="text-slate-300 grid grid-cols-2 grid-rows-2 text-lg bg-gray-800 rounded-xl mx-4 mb-10 pb-4 items-center sm:text-xl lg:grid-cols-5 lg:grid-rows-1 lg:pb-4 lg:pt-4 gap-4">
      <div className="mx-4 flex justify-end items-center">
        <img className="w-12" src={data.image} alt={`${data.id}-coin-symbol`} />
      </div>
      <div className="flex items-center">{data.name}</div>
      {data.price_change_percentage_24h > 0 ? (
        <div className="text-lime-500 py-2 flex flex-col pl-10 sm:pl-16 md:pl-24">
          +{Math.round(data.price_change_percentage_24h * 100) / 100}%
          <div className="text-slate-600 text-xs">(24h)</div>
        </div>
      ) : (
        <div className="text-red-600 py-2 flex flex-col pl-10 sm:pl-16 md:pl-24">
          {Math.round(data.price_change_percentage_24h * 100) / 100}%
          <div className="text-slate-600 text-xs">(24h)</div>
        </div>
      )}
      <div className="py-2 sm:py-4">
        ${data.market_cap.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        <div className="text-slate-600 text-xs">(Market Cap)</div>
      </div>
      <div className="pb-2 pt-4 pl-10 flex flex-col sm:pl-16 md:pl-24">
        {data.current_price < 1 && <>{data.current_price}</>}$
        {data.current_price >= 1 &&
          data.current_price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        <div className="text-slate-600 text-xs">(Price)</div>
      </div>
    </div>
  );
}

/**
 * 
 *       

 * 
 * 
 * 
 *         <
 */
