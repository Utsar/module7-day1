import LandingPic from "../Assets/landingPageBackgroundPic.jpg";
import "../Styles/LandingPageBackground.css";

export const LandingBackground = () => {
  return (
    <>
      <img className="landingImage" src={LandingPic}></img>
    </>
  );
};
