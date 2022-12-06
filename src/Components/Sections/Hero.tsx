import { MutableRefObject, useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className=" flex justify-center my-32 relative w-full mr-8 flex-col-reverse lg:flex-row overflow-hidden max-w-[100vw] items-center">
      <div
        className={`${styles.title} flex lg:items-end justify-center flex-col grow items-center py-6 relative pr-4`}
      >
        <div className="text-5xl font-bold text-[#1a3344]">Andrew</div>
        <div className="text-6xl  font-thin pr-2">Sanderson</div>
        <div className="text-xl my-2 text-[#4a6d86]">
          Font-End Web Developer
        </div>
      </div>
      <div
        className="flex justify-center items-center overflow-hidden relative z-20 bg-[#f9f5ef] h-[350px] w-[350px]"
        style={{ borderRadius: "50%" }}
      >
        <svg
          className="absolute"
          height="100%"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <circle className={styles.circle} cx="50" cy="50" r="49.5" />
        </svg>
        <img
          alt="my-avatar"
          src="/media/me.svg"
          className={`${styles.avatar} px-[8px] `}
          style={{
            borderRadius: "50%",
            backgroundColor: "#f9f5ef",
          }}
        />
      </div>
      <div
        className="-z-10 min-w-[25%] grow hidden lg:flex flex-col py-4 "
        style={{ marginRight: "-3px" }}
      >
        <div className="h-1/2 w-full"></div>
        <div
          className={`${styles.pointer} h-1/2 w-full border-t border-dashed border-slate-800`}
        ></div>
      </div>
    </div>
  );
};

export default Hero;
