import React from "react";
import tourist from "../assets/video/ankos.mp4.mp4";
import { AiOutlineSearch } from "react-icons/ai";

function Hero() {
  return (
    <div className="w-full h-screen relative">
      <video
        className=" w-full object-cover"
        src={tourist}
        autoPlay
        loop
        muted
      />
      {/* <div className=" w-full flex flex-col justify-center text-center  text-white  p-4 items-center"> */}
      <div className="absolute w-full h-full top-0 left-0 bg-gray-900/90"></div>
      <div className=" w-full h-full flex flex-col justify-center text-center  items-center">
        <h1>Premium Travel</h1>
        <h3 className="py-10">The Best Worldwide</h3>
        <form className="flex justify-center items-center text-center max-w-[700px] mx-auto w-full border p-1 rounded-md text-black bg-gray-100/90">
          <input
            type="text"
            placeholder="Search Destinations"
            className="bg-transparent w-[300px] sm:w-[400px] focus:outline-none"
          ></input>

          <button>
            <AiOutlineSearch
              size={20}
              className="icon px-0 h-0"
              style={{ color: "white" }}
            />
          </button>
        </form>
      </div>
    </div>
    // </div>
  );
}

export default Hero;
