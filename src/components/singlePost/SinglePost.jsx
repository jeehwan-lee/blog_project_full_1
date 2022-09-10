import React from "react";
import "./singlepost.css";

function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <div className="singlePostIcon">
              <i class="fa-regular fa-pen-to-square"></i>
            </div>
            <div className="singlePostIcon">
              <i class="fa-regular fa-trash-can"></i>
            </div>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author : <b>Safak</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe
          adipisci temporibus atque provident. Quasi quaerat officiis sequi
          esse, nostrum enim. Lorem, ipsum dolor sit amet consectetur
          adipisicing elit. Saepe adipisci temporibus atque provident. Quasi
          quaerat officiis sequi esse, nostrum enim. Lorem, ipsum dolor sit amet
          consectetur adipisicing elit. Saepe adipisci temporibus atque
          provident. Quasi quaerat officiis sequi esse, nostrum enim. Lorem,
          ipsum dolor sit amet consectetur adipisicing elit. Saepe adipisci
          temporibus atque provident. Quasi quaerat officiis sequi esse, nostrum
          enim.
        </p>
      </div>
    </div>
  );
}

export default SinglePost;
