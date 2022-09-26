import React, { useState } from "react";

export default function Dropdown({ value, options, onChange }: any) {
  return (
    <>
      <select value={value == null ? "market_cap" : value} onChange={onChange}>
        {options.map((option: any) => {
          return (
            <option value={option.value} key={option.value}>
              {option.label}
            </option>
          );
        })}
      </select>
    </>
  );
}
