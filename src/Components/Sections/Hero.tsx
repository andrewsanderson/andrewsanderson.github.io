import { MutableRefObject, useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroDim = 330;

  return (
    <div className="h-64 flex justify-center my-32 relative w-full mr-8 flex-col-reverse lg:flex-row pt-32 ">
      <div className="  flex lg:items-end justify-center flex-col grow lg:mr-32 items-center py-6 relative pr-4">
        <div className="text-5xl font-bold text-[#1a3344]">Andrew</div>
        <div className="text-6xl  font-thin pr-2">Sanderson</div>
        <div className="text-xl my-2 text-[#4a6d86]">
          Font-End Web Developer
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img
          alt="my-avatar"
          src="/media/me.svg"
          className="h-[110%] initial lg:absolute border-4 p-1 border-slate-800 shadow-2xl "
          style={{
            borderRadius: "50%",
            backgroundColor: "#f9f5ef",
          }}
        />
      </div>
      <div
        className="-z-10 min-w-[40%] h-full grow hidden lg:flex flex-col py-4 "
        style={{ marginRight: "-3px" }}
      >
        <div className="h-1/2 w-full"></div>
        <div className="h-1/2 w-full border-t border-dashed border-slate-800"></div>
      </div>
    </div>
  );
};

export default Hero;
