import { Nav, Contact, Hero } from "./Components/Sections";
import Skills from "./Components/Sections/Skills";

function App() {
  return (
    <div className=" flex justify-center">
      <div className="max-w-2/3 w-2/3">
        <Nav />
        <Hero />
        <Skills />
        <Contact />
      </div>
    </div>
  );
}

export default App;
