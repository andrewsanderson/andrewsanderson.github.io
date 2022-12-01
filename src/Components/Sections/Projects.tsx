import Card from "Components/Library/Card";
import { useState } from "react";
const lipsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.`;

const projects = [
  { title: "Maze Generator & Solver", description: lipsum, repoLink: "" },
  { title: "Front End Portfolio", description: lipsum, repoLink: "" },
  { title: "WYSIWYG Text Project Manager", description: lipsum, repoLink: "" },
];

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(3);
  return (
    <div>
      <div className="flex">
        {[
          ...projects,
          ...projects,
          {
            title: "WYSIWYG Text Project Manager",
            description: "",
            repoLink: "",
          },
        ].map((project, index) => {
          return (
            <Card
              className={`xl:min-w-[20vw] lg:min-w-[40vw] min-w-[60vw] w-[30vw] p-12  ${
                +index === activeIndex ? "scale-110" : "grayscale opacity-50"
              }`}
            >
              <div className="font-bold text-xl">{project.title}</div>
              <div className="text-slate-600 border-b border-dashed border-slate-600 pb-3">
                {project.description}
              </div>
              <div className="flex items-center justify-end pt-4">
                <div className="h-8 z-10 bg-slate-200 rounded-[50%]">
                  <img
                    className="h-full"
                    src="/media/icons/github.png"
                    alt="github logo"
                  />
                </div>
                <div className="py-1 border-b border-dashed border-slate-600 rounded bg-slate-200 text-sm px-6  -ml-3">
                  View on Github
                </div>
              </div>
            </Card>
          );
        })}
      </div>
      <div className="flex justify-center w-full py-6">
        <div className="font-thin text-xl text-right mr-12 pl-3 w-32">{`<  previous`}</div>

        <div className="font-thin text-xl ml-3 pr-12 w-32 ">{`next  >`}</div>
      </div>
    </div>
  );
};
export default Projects;
