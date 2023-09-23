import React from "react";

import "../pages/style.scss";

const Navbar = () => {
  return (
    <div className="navbar">
      <span className="logo">CHAT APP</span>
      <div className="user">
      <img src="https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png" alt="" /> 
        <span> jhon</span>
      </div>
      <button>logout</button>
    </div>
  );
};

export default Navbar;
