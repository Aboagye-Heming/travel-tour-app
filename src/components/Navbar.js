import React from "react";
import {
  BsFacebook,
  BsInstagram,
  BsPerson,
  BsPinterest,
  BsSearch,
  BsTwitter,
  BsYoutube,
} from "react-icons/bs";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-20 px-4">
      <h1>HEMNEGY.</h1>
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
      <div className="md:flex hidden">
        <img src="./src/assets/images/icon-cart.svg" alt="" size={20} />
      </div>

      {/* Mobile menu dropdown */}
      <div className="absolute left-0 top-0 w-full bg-gray-100/90 px-4 py-7 flex flex-col">
        <ul>
          <h1>HEMNEGY.</h1>
          <li>Home</li>
          <li>Destination</li>
          <li>Travel</li>
          <li>View</li>
          <li>Book</li>
          <div className="flex flex-col">
            <button className="my-6" >Search</button>
            <button >Account</button>
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
