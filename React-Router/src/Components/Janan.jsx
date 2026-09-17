import React from "react";
import jananImg from "../assets/janan.png"

const Janan = () => {
  return (
    <div>
      <div className="card bg-white w-fit">
        {/* 1. Image container par overflow-hidden aur size define karein */}
        <div className="w-70 h-80 overflow-hidden cursor-pointer">
          <img
            src={jananImg}
            className="w-full h-full object-contain origin-bottom transition-transform duration-500 ease-out hover:scale-110"
            alt="Janan Sport Perfume"
          />
        </div>
        <p className="pt-3 font-semibold">JANAN SPORT - 100ML</p>
        <p className="text-gray-700">PKR 6,800</p>
      </div>
    </div>
  );
};

export default Janan;