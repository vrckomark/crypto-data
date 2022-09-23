import React from "react";

export default function CoinItem({ data }: any) {
  return (
    <div className="flex bg-gray-800 border-gray-700 mb-10 py-6 mx-10 rounded-xl items-center px-4">
      <img
        className="w-10 mx-4"
        src={data.image}
        alt={`${data.id}-coin-symbol`}
      />
      <div className="text-white">{data.name}</div>
    </div>
  );
}
