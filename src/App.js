import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Personal from "./components/Personal";
import Contacts from "./components/Contacts";
import Hobbies from "./components/Hobbies";
import Skills from "./components/Skills";
import Certificates from "./components/Certificates";
import Experience from "./components/Experience";
import Education from "./components/Education";

function App() {
  return (
    <div className="app">
      <Header />
      <Main />
      <Contacts />
      <Personal />
      <Hobbies />
      <Skills />
      <Certificates />
      <Experience />
      <Education />
    </div>
  );
}

export default App;
