import React from "react";
import Janan from "../Components/Janan";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Fragrance = () => {
  const { id } = useParams();
  console.log(id);

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex justify-around items-center border-b py-4 text-2xl">
        <button
          className="bg-black flex text-white px-4 py-2 rounded-lg cursor-pointer"
          onClick={() => navigate(-1)}
        >
          Back
        </button>
      </div>
      <div className="flex flex-wrap gap-5 justify-evenly">
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
        <Janan />
      </div>
    </div>
  );
};

export default Fragrance;
