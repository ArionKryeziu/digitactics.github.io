import React from "react";
//imagess
import Logo from "../assets/logofinal.png";
const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="">
            <img src={Logo} width={150} height={150} alt="logo" />
          </a>
          {/* Buttons */}
          <button className="btn btn-sm">Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
