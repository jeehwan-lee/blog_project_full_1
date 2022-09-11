import React from "react";
import "./topbar.css";
import { Link } from "react-router-dom";

function topb() {
  const user = false;

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
          <li className="topListItem">
            <Link to="/" className="link">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              ABOUT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/" className="link">
              CONTACT
            </Link>
          </li>
          <li className="topListItem">
            <Link to="/write" className="link">
              WRITE
            </Link>
          </li>
          <li className="topListItem">{user && "LOGOUT"}</li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs-tinysrgb&dpr=2&w=500"
            alt=""
          />
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}
        <div className="topSearchIcon">
          <i class="fa-solid fa-magnifying-glass"></i>
        </div>
      </div>
    </div>
  );
}

export default topb;
