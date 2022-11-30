import { Nav, Contact, Hero } from "./Components/Sections";
import Skills from "./Components/Sections/Skills";

function App() {
  return (
    <div className=" flex-col flex items-center">
      <Nav />
      <Hero />
      <div className="max-w-2/3 w-2/3">
        <Skills />
      </div>
      <div className="max-w-2/3 w-2/3">
        <Contact />
      </div>
    </div>
  );
}

export default App;
