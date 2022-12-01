import DropDownMenu from "Components/Library/DropdownMenu";
import { MutableRefObject, useRef } from "react";
import { Contact, Hero } from "./Components/Sections";
import Skills from "./Components/Sections/Skills";
import footerBg from "./media/footerBg.svg";

const returnToTopIcon = (
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
      d="M8.25 6.75L12 3m0 0l3.75 3.75M12 3v18"
    />
  </svg>
);

function App() {
  const sections = {
    about: { ref: useRef() as MutableRefObject<HTMLDivElement> },
    skills: { ref: useRef() as MutableRefObject<HTMLDivElement> },
    contact: { ref: useRef() as MutableRefObject<HTMLDivElement> },
  };

  const returnToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  const navClick = (title: keyof typeof sections) => {
    sections[title].ref.current.scrollIntoView();
  };

  console.log(
    window.requestAnimationFrame((e) => {
      console.log(e);
    })
  );

  return (
    <div className=" flex-col flex items-center ">
      <div className="text-xl w-full flex justify-center py-4">
        <button onClick={returnToTop} className="fixed top-0 left-0 p-4 m-4">
          {returnToTopIcon}
        </button>
        {Object.keys(sections).map((title) => {
          return (
            <button
              key={title}
              onClick={() => navClick(title as keyof typeof sections)}
              className="p-4 tracking-wider lowercase"
            >
              {title}
            </button>
          );
        })}
        <div
          className="fixed p-3 pt-6  shadow-2xl top-0 right-0 bg-[#f9f5ef]"
          style={{ borderRadius: "0 0 0 1rem" }}
        >
          <DropDownMenu refs={sections} />
        </div>
      </div>
      <div ref={sections.about.ref} className="w-full">
        <Hero />
      </div>
      <div className="max-w-2/3 w-2/3" ref={sections.skills.ref}>
        <Skills />
      </div>
      <div className="w-full py-16 flex justify-center items-center mt-16 relative">
        <img
          src={footerBg}
          className="absolute -z-10  object-cover w-full -bottom-1/3 opacity-80"
          alt="bg"
        />
        <div className="max-w-2/3 w-2/3" ref={sections.contact.ref}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
