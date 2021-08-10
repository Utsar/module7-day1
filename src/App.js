import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Route } from "react-router-dom";
import { Companies } from "./Components/Companies";
import { HomePage } from "./Components/HomePage";
import { LandingBackground } from "./Components/LandingBackground";

function App() {
  return (
    <>
      <LandingBackground />
      <HomePage />
      <BrowserRouter>
        <Route exact path="/company-details" component={Companies} />
      </BrowserRouter>
    </>
  );
}

export default App;
