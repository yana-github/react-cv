import "./App.css";
import Header from "./components/Header";
import Profile from "./components/Profile";
import Contacts from "./components/Contacts";
import Experience from "./components/Experience";

function App() {
  return (
    <div className="app">
      <Header />
      <Profile />
      <Contacts />
      <Experience />
    </div>
  );
}

export default App;
