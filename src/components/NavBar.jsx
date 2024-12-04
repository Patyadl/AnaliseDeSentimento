import React from 'react';
import Logo from "../../src/assets/logo.png"

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-0 shadow-md h-16 flex">
      <div className="container mx-auto flex justify-center items-center">
        <img className="object-contain h-40" src={Logo} alt="logo" />
      </div>
    </nav>
  );
};

export default Navbar;


