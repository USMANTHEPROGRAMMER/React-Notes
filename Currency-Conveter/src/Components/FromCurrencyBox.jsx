import React, { useState } from "react";
import { GiCancel } from "react-icons/gi";

const FromCurrencyBox = ({ currencyList, closeFromCurrencyBox, setFromCurrencyy }) => {
  const [fromCurrencyInput, setFromCurrencyInput] = useState("");

  let currenciesList = currencyList;

  const filteredList = currenciesList.filter((elem, idx) => {
    if (fromCurrencyInput === "") return true;
    return elem.code.toUpperCase().includes(fromCurrencyInput.toUpperCase());
  });

  return (
    <div
      className="bg-gradient-to-br from-[#1a1e3f] to-[#0d0f24] border border-white/10 shadow-2xl shadow-black/50 rounded-2xl fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center items-center pb-6 pt-5 w-[80%] sm:w-3/4 md:w-1/2 lg:w-[45%] gap-5"
    >
      <div
        onClick={closeFromCurrencyBox}
        className="Icon cursor-pointer text-white/50 hover:text-emerald-300 transition-colors text-3xl self-end mr-5 -mb-2"
      >
        <GiCancel />
      </div>
      <input
        value={fromCurrencyInput}
        onChange={(e) => {
          setFromCurrencyInput(e.target.value.toUpperCase());
        }}
        type="text"
        className="px-6 w-[85%] rounded-full border border-white/10 focus:border-emerald-400/60 outline-none py-3 bg-black/25 text-white placeholder:text-white/30 transition-colors"
        placeholder="Search Currency Code..."
      />
      <div
        className="box rounded-xl w-[88%] h-80 flex py-3 px-2 overflow-y-auto overflow-x-hidden
      scrollbar-none flex-wrap justify-center gap-2.5 bg-black/20 border border-white/5"
      >
        {/* logical Things Starts from here! */}

        {filteredList.length > 0 ? (
          filteredList.map((elem, idx) => {
            return (
              <div
                onClick={() => {
                  console.log(elem);
                  setFromCurrencyy([
                    elem.code,
                    elem.name,
                    elem.country,
                    elem.symbol,
                    elem.flag,
                  ]);
                  closeFromCurrencyBox();
                }}
                key={idx}
                className="cursor-pointer bg-white/[0.05] hover:bg-emerald-400/10 border border-white/10 hover:border-emerald-400/40 rounded-xl h-14 flex justify-between px-4 items-center w-[95%] transition-colors group"
              >
                <div className="flex items-center gap-2">
                  <img
                    src={elem.flag}
                    alt={elem.country}
                    className="w-6 h-6 rounded-full object-cover ring-1 ring-white/15"
                  />
                  <p className="text-white/40 text-xs">{`${idx + 1}.`}</p>
                  <p className="text-white font-semibold group-hover:text-emerald-300 transition-colors">
                    {elem.code}
                  </p>
                </div>
                <p className="text-white/50 text-sm truncate max-w-[45%] text-right">
                  {elem.country}
                </p>
              </div>
            );
          })
        ) : (
          <div className="bg-white/[0.05] border border-white/10 rounded-xl h-14 flex justify-center px-4 items-center w-[95%]">
            <p className="text-white/50">No Country Code Found!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default FromCurrencyBox;