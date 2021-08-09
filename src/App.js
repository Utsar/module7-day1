import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { HomePage } from "./Components/HomePage";
import { LandingBackground } from "./Components/LandingBackground";

function App() {
  return (
    <>
      <LandingBackground />
      <HomePage />
    </>
  );
}

export default App;
