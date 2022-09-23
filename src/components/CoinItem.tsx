import React from "react";

export default function CoinItem({ data }: any) {
  return (
    <div className="bg-bg2 flex border-2 border-white my-8 py-6 mx-10 rounded-xl items-center px-4">
      <img
        className="w-10 mx-4"
        src={data.image}
        alt={`${data.id}-coin-symbol`}
      />
      <div className="text-white">{data.id}</div>
    </div>
  );
}
