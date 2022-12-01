import {
  createRef,
  MutableRefObject,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useRef } from "react";
import Card from "../Library/Card";
import axios from "axios";

const skills = [
  {
    pageId: 9845,
    title: "ECMAScript / JS",
    level: "Advanced",
    iconUrl: "/media/icons/javascript.svg",
    description: "Fetching from Wikipedia....",
  },
  {
    pageId: 8157205,
    title: "Typescript",
    level: "Intermediate",
    iconUrl: "/media/icons/typescript.svg",
    description: "Fetching from Wikipedia....",
  },
  {
    pageId: 26415635,
    title: "NodeJs",
    level: "Intermediate",
    iconUrl: "/media/icons/nodejs.png",
    description: "Fetching from Wikipedia....",
  },
  {
    pageId: 24893,
    title: "Adobe Photoshop",
    level: "Advanced",
    iconUrl: "/media/icons/photoshop.svg",
    description: "Fetching from Wikipedia....",
  },
  {
    pageId: 64142309,
    title: "Figma",
    level: "Advanced",
    iconUrl: "/media/icons/figma.svg",
    description: "Fetching from Wikipedia....",
  },
  {
    pageId: 44926137,
    title: "React",
    level: "Intermediate",
    iconUrl: "/media/icons/react.svg",
    description: "Fetching from Wikipedia....",
  },
];

const Skills = () => {
  const [skillState, setSkillState] = useState(skills);

  const refArray: Array<MutableRefObject<HTMLInputElement>> = useMemo(
    () => [],
    []
  );
  const wrapperRef = useRef() as MutableRefObject<HTMLInputElement>;
  for (const skill of skillState) {
    refArray.push(createRef() as MutableRefObject<HTMLInputElement>);
    void skill;
  }

  useEffect(() => {
    const asyncWikiFetch = async () => {
      const newSkills = JSON.parse(JSON.stringify(skills));

      for (const skill of newSkills) {
        await axios({
          url: `https://en.wikipedia.org/w/api.php?action=query&origin=*&prop=extracts&format=json&exintro=&pageids=${skill.pageId}`,
          method: "GET",
        })
          // Handle the response from backend here
          .then((res) => {
            const responseObject: Object = res.data.query.pages;
            const resText = Object.values(responseObject)[0].extract;
            const regex = /<.*?>/g;
            const parsedResponseText: string = resText
              .replaceAll(regex, "")
              .substring(0, 127);
            skill.description = parsedResponseText;
          })

          .catch((err) => {
            console.log("err", err);
          });
      }
      setSkillState(newSkills);

      return newSkills;
    };

    asyncWikiFetch().catch(console.error);

    const onScroll = () => {
      if (window.innerWidth < 1280) {
        const midpoint = window.pageYOffset + window.innerHeight / 2;
        for (const [index, ref] of Object.entries(refArray)) {
          if (!!ref.current) {
            const top =
              window.pageYOffset +
              Math.abs(ref.current.getBoundingClientRect().top);
            const bottom =
              Math.abs(ref.current.getBoundingClientRect().bottom) +
              window.pageYOffset;
            if (midpoint > top && midpoint < bottom) {
              setSkillViewIndex(+index);
            }
          }
        }
      } else {
        setSkillViewIndex(-1);
      }
    };

    window.removeEventListener("scroll", onScroll);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [refArray]);

  const [skillViewIndex, setSkillViewIndex] = useState(-1);

  return (
    <div className="grid-cols-1 xl:grid-cols-2 grid" ref={wrapperRef}>
      {skillState.map((skill, index) => {
        return (
          <Card
            ref={refArray[index]}
            key={skill.title}
            className={`transform transition ease-in-out grayscale flex h-[300px] max-h-[300px] items-center overflow-hidden 
            ${
              skillViewIndex < 0
                ? "hover:scale-110 hover:opacity-100 hover:grayscale-0"
                : skillViewIndex === index
                ? "scale-110 opacity-100 grayscale-0"
                : "opacity-70"
            }
             `}
          >
            <img
              className="w-[100px] h-[70px] object-contain px-4"
              alt={`${skill.title} icon`}
              src={skill.iconUrl}
            />

            <div>
              <div className="text-xl font-bold">{skill.title}</div>
              <div>
                Level: <span className="font-bold">{skill.level}</span>
              </div>
              <div className="text-ellipsis overflow-hidden max-h-[70%] py-4">
                {skill.description}...
              </div>

              <div>
                <a
                  className="text-blue-500"
                  href={`https://en.wikipedia.org/?curid=${skill.pageId}`}
                >
                  {"Read More >"}
                </a>
              </div>
              <div className="text-right text-[.5rem] uppercase text-gray-500 tracking-wider pt-2 ">
                info. fetched from Wikipedia
              </div>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

export default Skills;
