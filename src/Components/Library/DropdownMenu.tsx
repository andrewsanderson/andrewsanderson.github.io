import { useEffect, useState } from "react";

const menuIcon = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
    />
  </svg>
);

const DropDownMenu = ({ refs }: any) => {
  const [isActive, setIsActive] = useState(false);
  const [activeTab, setActiveTab] = useState("about");
  const [yVal, setYVal] = useState(0);

  const onDropDownClick = () => {
    setIsActive(!isActive);
  };

  useEffect(() => {
    const onScroll = () => {
      setYVal(window.pageYOffset);
      const midpoint = window.pageYOffset + window.innerHeight / 2;

      for (const [key, val] of Object.entries(refs) as any) {
        const current = val.ref.current;

        if (!!current) {
          const top =
            window.pageYOffset + Math.abs(current.getBoundingClientRect().top);
          const bottom =
            Math.abs(current.getBoundingClientRect().bottom) +
            window.pageYOffset;
          if (midpoint > top && midpoint < bottom) {
            setActiveTab(key);
          }
        }
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  });

  const navClick = (title: keyof typeof refs) => {
    refs[title].ref.current.scrollIntoView();
  };

  return (
    <div className="flex flex-row-reverse bg-[rgb(248, 244, 238)]">
      {yVal > 30 && (
        <>
          <div className="flex flex-col">
            {Object.entries(refs).map(([key, val]) => {
              const isThisAc = isActive;
              return (
                <div
                  onClick={() => navClick(key)}
                  className={`${isThisAc ? " " : "hidden"}   pl-2`}
                >
                  {key}
                </div>
              );
            })}
          </div>
          <div className="pt-1" onClick={onDropDownClick}>
            {menuIcon}
          </div>
        </>
      )}
    </div>
  );
};

export default DropDownMenu;
