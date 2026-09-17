import React from "react";
import { FiBookmark } from "react-icons/fi";

const Card = (props) => {
  console.log(props);
  return (
    <div className="Card">
      <div className="Card-Header">
        <h4>{props.hr}</h4>
        <p>
          <FiBookmark />
        </p>
      </div>
      <div className="Card-Center">
        <p>{props.profession}</p>
        <img
          src="https://cdn.iconscout.com/icon/premium/png-256-thumb/arrow-right-icon-svg-download-png-11876151.png?f=webp&w=128"
          alt="Job Image"
        />
      </div>
      <div className="circle">
        <div className="circle-1" style={{ backgroundColor: "#111" }}></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
      </div>
      <div className="Card-Footer">
        <img src={props.img} alt="Azure Company Logo" />
        <p>{props.profession}</p>
        <button>View</button>
      </div>
    </div>
  );
};

export default Card;
