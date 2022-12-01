import DropDownMenu from "Components/Library/DropdownMenu";
import Projects from "Components/Sections/Projects";
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

const Title = ({ title, subtitle }: { [x: string]: string }) => {
  return (
    <div className="pt-12 ml-64 pb-8 relative w-full">
      <div className="uppercase font-bold text-3xl">{title}</div>
      <div className="lowercase inline font-thin text-2xl border-b border-dashed border-slate-800">
        {subtitle}
      </div>
    </div>
  );
};

function App() {
  const sections = {
    about: { ref: useRef() as MutableRefObject<HTMLDivElement> },
    projects: { ref: useRef() as MutableRefObject<HTMLDivElement> },
    skills: { ref: useRef() as MutableRefObject<HTMLDivElement> },
    contact: { ref: useRef() as MutableRefObject<HTMLDivElement> },
  };

  const returnToTop = () => {
    document.body.scrollTop = document.documentElement.scrollTop = 0;
  };

  const navClick = (title: keyof typeof sections) => {
    sections[title].ref.current.scrollIntoView();
  };

  return (
    <div className=" flex-col flex items-center overflow-hidden ">
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
      </div>

      <div ref={sections.about.ref} className="w-full">
        <Hero />
      </div>
      <Title
        title="Projects"
        subtitle="Personal projects i'm currently maintaining"
      />
      <div className="" ref={sections.projects.ref}>
        <Projects />
      </div>
      <Title
        title="Skills"
        subtitle="A range of libraries, languages, and frameworks I'm proficient in."
      />
      <div className="max-w-2/3 w-2/3" ref={sections.skills.ref}>
        <Skills />
      </div>
      <Title
        title="Contact"
        subtitle="Click below to fill out a form and send an inquiry."
      />
      <div className="w-full py-16 flex justify-center items-center mt-16 relative">
        <div className="max-w-2/3 w-2/3" ref={sections.contact.ref}>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
