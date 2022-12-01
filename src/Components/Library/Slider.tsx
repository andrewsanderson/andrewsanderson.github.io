/*
for all passed children get the widest 
wrap all children in divs that are the size of the widest, then center them

*/

import { ReactNode, useRef } from "react";
import { isJsxElement, JsxElement } from "typescript";

type SliderProps = {
  children: Array<ReactNode>;
};

const Slider = ({ children }: SliderProps) => {
  const refArray = children.map((child) => {
    return useRef(child);
  });

  // const widest = [...refArray].sort((a, b) => {
  //   if (!!a.current && !!b.current) {
  //     const aWidth = a.current.getBoundingClientRect().width;
  //     const bWidth = a.current.getBoundingClientRect().width;
  //     return aWidth > bWidth ? 1 : aWidth < bWidth ? -1 : 0;
  //   } else {
  //     return 0;
  //   }
  // })[0].current.getBoundingClientRect().width;

  return (
    <>
      {children.map((child) => {
        return <div className="border">{child}</div>;
      })}
    </>
  );
};

export default Slider;
