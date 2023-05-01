import React, { useState } from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsPinterest,
  BsSearch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";
import { AiOutlineClose, AiOutlineBars } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [logo, setLogo] = useState(false);
  const handleNav = () => {
    setNav(!nav);
    setLogo(!logo);
  };

  return (
    <div className="flex w-full justify-between items-center h-20 px-4 absolute z-10 text-white">
      <div>
        <h1 className={logo ? "hidden" : "block"}>HEMNEGY.</h1>
      </div>
      <ul className="md:flex hidden">
        <li>Home</li>
        <li>Destination</li>
        <li>Travel</li>
        <li>View</li>
        <li>Book</li>
      </ul>
      <div>
        <ul className="md:flex hidden">
          <li>
            <BsPerson size={20} />
          </li>

          <li>
            <BsSearch size={20} />
          </li>
        </ul>
      </div>

      {/* Humburger */}
      <div onClick={handleNav} className="md:hidden z-10">
        {nav ? (
          <AiOutlineClose className="text-black" size={20} />
        ) : (
          <AiOutlineBars size={20} />
        )}
      </div>

      {/* Mobile menu dropdown */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "absolute left-0 text-black top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col"
            : "absolute left-[-100%] "
        }
      >
        <ul>
          <h1>HEMNEGY.</h1>
          <li className="border-b">Home</li>
          <li className="border-b">Destination</li>
          <li className="border-b">Travel</li>
          <li className="border-b">View</li>
          <li className="border-b">Book</li>
          <div className="flex flex-col">
            <button className="my-6">Search</button>
            <button>Account</button>
          </div>
          <div className="flex justify-between my-6">
            <BsFacebook className="icon" />
            <BsTwitter className="icon" />
            <BsYoutube className="icon" />
            <BsPinterest className="icon" />
            <BsInstagram className="icon" />
          </div>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
