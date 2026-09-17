import React from "react";
import { IoIosArrowDropdown } from "react-icons/io";
import { BiTransferAlt } from "react-icons/bi";

const MainCard = ({
  isLoading,
  error,
  openFromCurrencyBox,
  openToCurrencyBox,
  fromCurrency,
  toCurrency,
  fromAmount,
  toAmount,
  setFromAmount,
  setFromCurrency,
  setToCurrency,
}) => {
  return (
    <div className="w-full max-w-4xl mx-auto p-2">
      {/* Main Parent Container: Mobile pe column (upar-neechay), Desktop pe row (aamne-samne) */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-3 bg-gradient-to-br from-[#151833] to-[#0d0f24] p-5 md:p-6 rounded-3xl shadow-2xl shadow-black/40 border border-white/5">
        {/* ================= CARD 1 (FROM) ================= */}
        <div className="w-full md:w-[45%] bg-white/[0.06] backdrop-blur-sm border border-white/10 py-4 px-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors hover:bg-white/[0.08]">
          <div className="w-full sm:w-auto flex flex-col">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-indigo-300/70 pl-1 pb-2">
              Amount
            </p>
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 object-cover rounded-full ring-2 ring-white/15"
                src={fromCurrency[4]}
                alt="Country-Flag"
              />
              <p
                onClick={openFromCurrencyBox}
                className="text-white cursor-pointer select-none text-lg flex items-center gap-1 font-semibold hover:text-emerald-300 transition-colors"
              >
                {fromCurrency[0]}
                <IoIosArrowDropdown className="text-base opacity-70" />
              </p>
            </div>
          </div>

          <input
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            onClick={() => setFromAmount("")}
            type="number"
            className="[appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none px-3 border border-white/10 focus:border-emerald-400/60 outline-none w-full sm:w-32 text-center rounded-xl bg-black/25 py-3 text-xl font-medium text-white placeholder:text-white/30 transition-colors"
          />
        </div>

        {/* ================= TRANSFER ICON (BEECH MEIN) ================= */}
        <div className="flex items-center justify-center shrink-0 order-last md:order-none -my-1 md:my-0">
          <button
            type="button"
            onClick={() => {
              setFromCurrency(toCurrency);
              setToCurrency(fromCurrency);
            }}
            className="bg-emerald-400 hover:bg-emerald-300 active:scale-95 p-3 rounded-full cursor-pointer shadow-lg shadow-emerald-500/30 transition-all duration-200 hover:rotate-180"
          >
            <BiTransferAlt color="#0d0f24" size="22px" />
          </button>
        </div>

        {/* ================= CARD 2 (TO) ================= */}
        <div className="w-full md:w-[45%] bg-white/[0.06] backdrop-blur-sm border border-white/10 py-4 px-4 rounded-2xl flex flex-col sm:flex-row justify-between items-center gap-4 transition-colors hover:bg-white/[0.08]">
          <div className="w-full sm:w-auto flex flex-col">
            <p className="text-[11px] font-semibold tracking-[0.15em] uppercase text-indigo-300/70 pl-1 pb-2">
              Converted Amount
            </p>
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 object-cover rounded-full ring-2 ring-white/15"
                src={toCurrency[4]}
                alt="Country-Flag"
              />
              <p
                onClick={openToCurrencyBox}
                className="text-white cursor-pointer select-none text-lg flex items-center gap-1 font-semibold hover:text-emerald-300 transition-colors"
              >
                {toCurrency[0]}
                <IoIosArrowDropdown className="text-base opacity-70" />
              </p>
            </div>
          </div>

          <div className="w-full sm:w-32 text-center rounded-xl px-3 py-3 text-xl font-medium bg-black/25 border border-white/10 text-emerald-300 overflow-x-auto whitespace-nowrap [::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
            {isLoading ? (
              <p className="flex items-center justify-center gap-2 text-sm text-emerald-300/70">
                <span className="w-3.5 h-3.5 border-2 border-emerald-300/40 border-t-emerald-300 rounded-full animate-spin" />
                Converting...
              </p>
            ) : (
              <p>{toAmount}</p>
            )}
          </div>
        </div>
      </div>

      {/* ================= ERROR MESSAGE ================= */}
      {error && (
        <p className="text-red-400 text-sm text-center mt-3">{error}</p>
      )}
    </div>
  );
};

export default MainCard;