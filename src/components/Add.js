import React, { useState } from "react";

function Add() {
  const [query, setQuery] = useState();
  function onChange(e) {
    setQuery(e.target.value);
  }
  return (
    <div className="w-full h-[500px]">
      <div className="flex items-center justify-center w-[70%] h-full bg-add-banner bg-no-repeat bg-cover bg-center m-auto text-white">
        <div className="flex flex-col items-start justify-center gap-y-10 h-[80%] w-[80%]">
          <div>
            <h1 className="text-4xl font-extrabold">Hoş geldiniz.</h1>
            <h1 className="text-3xl font-semibold">
              Milyonlarca film, TV şovu ve keşfedilecek kişi. Şimdi keşfedin.
            </h1>
          </div>

          <input
            type="text"
            className="w-full h-10 rounded-xl text-black"
            placeholder="Film, dizi, kişi ara..."
            onChange={onChange}
          ></input>
        </div>
      </div>
      {query}
    </div>
  );
}

export default Add;
