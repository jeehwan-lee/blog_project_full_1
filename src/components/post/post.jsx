import React from "react";
import "./post.css";

function post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste
        mollitia fuga? Ad nobis doloribus libero. Vitae reiciendis aliquid esse?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste
        mollitia fuga? Ad nobis doloribus libero. Vitae reiciendis aliquid esse?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste
        mollitia fuga? Ad nobis doloribus libero. Vitae reiciendis aliquid esse?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum iste
        mollitia fuga? Ad nobis doloribus libero. Vitae reiciendis aliquid esse?
      </p>
    </div>
  );
}

export default post;
