import { Nav, Contact, Hero } from "./Components/Sections";
import Skills from "./Components/Sections/Skills";
import footerBg from "./media/footerBg.svg";

function App() {
  return (
    <div className=" flex-col flex items-center overflow-hidden">
      <Nav />
      <Hero />
      <div className="max-w-2/3 w-2/3">
        <Skills />
      </div>
      <div className="w-full py-16 flex justify-center items-center mt-16 relative">
        <img
          src={footerBg}
          className="absolute -z-10  object-cover w-full -bottom-1/3 opacity-80"
          alt="bg"
        />
        <div className="max-w-2/3 w-2/3">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
