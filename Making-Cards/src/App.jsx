import React from "react";
import "./App.css";
// import Card from "./Components/Card";
import CSS from "./Components/Learning CSS/CSS";

const App = () => {
  const jobCards = [
    {
      hr: "$125-145/hr",
      profession: "Azure Data Engineer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQv_RJjot304oMZ8JkZIU4z5kdNV_glJ9HRfGpLabnaHA&s=10",
    },
    {
      hr: "$150/hr",
      profession: "Senior Backend Engineer",
      img: "https://media.wired.com/photos/5926ffe47034dc5f91bed4e8/3:2/w_2560%2Cc_limit/google-logo.jpg",
    },
    {
      hr: "$120/hr",
      profession: "Senior UI Developer",
      img: "https://logolook.net/wp-content/uploads/2021/06/Nike-Logo.png",
    },
    {
      hr: "$95-110/hr",
      profession: "Product Designer",
      img: "https://static.vecteezy.com/system/resources/thumbnails/065/386/863/small_2x/figma-logo-square-outline-icon-figma-app-editable-transparent-background-premium-social-media-design-for-digital-download-free-png.png",
    },
    {
      hr: "$140/hr",
      profession: "Machine Learning Engineer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd04P01yLsZY7F6WLl1UKM5FzF1ZwAnkTCr97Etm3Ewucuy9sKHx0tVAY&s=10",
    },
    {
      hr: "$130/hr",
      profession: "DevOps Engineer",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCPjeZ-FjJ-FHOMlVO9c1ZtEPo8ypuNnRN1uCMugVyyA&s=10",
    },
    {
      hr: "$115-135/hr",
      profession: "Frontend Developer",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Spotify_logo_without_text.svg/1280px-Spotify_logo_without_text.svg.png",
    },
    {
      hr: "$160/hr",
      profession: "Cloud Solutions Architect",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/960px-Microsoft_logo.svg.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=thumbnail",
    },
    {
      hr: "$100-120/hr",
      profession: "Mobile App Developer",
      img: "https://1000logos.net/wp-content/uploads/2016/10/Apple-Logo.png",
    },
    {
      hr: "$145/hr",
      profession: "Data Scientist",
      img: "https://images.icon-icons.com/2699/PNG/512/netflix_logo_icon_170919.png",
    },
  ];

  return CSS();
    // <div className="Card-Container">
    //   {jobCards.map((card, index) => (
    //     <Card
    //       key={index}
    //       img={card.img}
    //       hr={card.hr}
    //       profession={card.profession}
    //     />
    //   ))}
    // </div>;
};

export default App;