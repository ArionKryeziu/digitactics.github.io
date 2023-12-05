import React from "react";
//imagess
import Logo from "../assets/image0-removebg.png";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="">
            <img src={Logo} width={250} height={250} alt="logo" />
          </a>
          {/* Buttons */}
          <button className="btn btn-sm">Punoni me ne</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
