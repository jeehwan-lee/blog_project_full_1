import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "./sidebar.css";

function Sidebar() {
  const [cat, setCat] = useState([]);

  useEffect(() => {
    const getCats = async () => {
      const res = await axios.get("http://localhost:5000/api/categories");
      setCat(res.data);
    };

    getCats();
  }, []);
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img
          src="https://i.pinimg.com/236x/1e/3f/58/1e3f587572a7a7b20bbf1828595a1786--holiday-party-themes-holiday-gift-guide.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          amet, optio magnam ut iste provident quo error doloribus iusto
          praesentium nobis illo.
        </p>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">CATEGORIES</span>
        <ul className="sidebarList">
          {cat.map((c) => (
            <Link to={`/?cat=${c.name}`} className="link">
              <li className="sidebarListItem">{c.name}</li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <span className="sidebarTitle">FOLLOW US</span>
        <div className="sidebarSocial">
          <div className="sidebarIcon">
            <i class="fa-brands fa-square-facebook"></i>
          </div>
          <div className="sidebarIcon">
            <i class="fa-brands fa-square-twitter"></i>
          </div>
          <div className="sidebarIcon">
            <i class="fa-brands fa-square-pinterest"></i>
          </div>
          <div className="sidebarIcon">
            <i class="fa-brands fa-square-instagram"></i>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
