import { MutableRefObject, useEffect, useRef, useState } from "react";

const Hero = () => {
  const heroDim = 330;

  return (
    <div className="h-64 flex justify-center my-24">
      <div className="w-1/2 h-full min-w-1/2 flex items-end justify-center flex-col mr-32">
        <div className="text-5xl ">Andrew</div>
        <div className="text-6xl  font-semibold">Sanderson</div>
        <div className="text-xl my-2">Font-End Web Developer</div>
      </div>
      <div className="bg-green-500 h-full w-1/2 flex items-center">
        <img
          alt="my-avatar"
          src="/media/me.svg"
          className="h-32 min-h-full -ml-32"
        />
      </div>
    </div>
  );
};

export default Hero;
