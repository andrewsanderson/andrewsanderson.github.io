import { MutableRefObject, useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroDim = 330;

  return (
    <div className="h-64 flex justify-center my-32 relative w-full mr-8 flex-col-reverse lg:flex-row ">
      <div className="  flex lg:items-end justify-center flex-col grow lg:mr-32 items-center py-6">
        <div className="text-5xl font-bold text-[#1a3344]">Andrew</div>
        <div className="text-6xl  font-thin pr-2">Sanderson</div>
        <div className="text-xl my-2 text-[#4a6d86]">
          Font-End Web Developer
        </div>
      </div>
      <div className="flex justify-center">
        <img
          alt="my-avatar"
          src="/media/me.svg"
          className="h-[110%] initial lg:absolute"
          style={{ marginTop: "-20px" }}
        />
      </div>
      <div className="bg-[#454748] min-w-[40%] h-full grow hidden lg:block ">
        {""}
      </div>
    </div>
  );
};

export default Hero;
