import React from "react";
import "./topbar.css";

function topb() {
  return (
    <div className="top">
      <div className="topLeft">
        <div className="topIcon">
          <i class="fa-brands fa-square-facebook"></i>
        </div>
        <div className="topIcon">
          <i class="fa-brands fa-square-twitter"></i>
        </div>
        <div className="topIcon">
          <i class="fa-brands fa-square-pinterest"></i>
        </div>
        <div className="topIcon">
          <i class="fa-brands fa-square-instagram"></i>
        </div>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs-tinysrgb&dpr=2&w=500"
          alt=""
        />

        <div className="topSearchIcon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default topb;
