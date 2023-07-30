import React from "react";
import "./header.css";

interface Props {
  img: string;
}

const Header: React.FC<Props> = ({ img }) => {
  console.log(img);

  return (
    <div className="header">
      <div>
        <img src={img} alt="" className="profile-picture" />
        <span></span>
      </div>
      <button>
        <img src="../../public/images/icon-reply.svg" alt="" />
      </button>
    </div>
  );
};

export default Header;
