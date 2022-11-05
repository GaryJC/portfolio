import UnityGames from "./unityGames";
import "./styles/projectStyle.scss";
import GarminWatch from "./garminWatch";
import MessagePoster from "./messagePoster";
import WhiteBoard from "./whiteBoard";
import GameShop from "./gameShop";
import AndroidApp from "./andoridApp";

function Projects() {
  return (
    <>
      <div className="slide">
        <h1>Projects</h1>
        <div className="eachSlide">
          <UnityGames />
          <GarminWatch />
          <MessagePoster />
          <WhiteBoard />
        </div>
      </div>
      <div className="slide">
        <div className="eachSlide">
          <GameShop />
          <AndroidApp />
        </div>
      </div>
    </>
  );
}

export default Projects;
