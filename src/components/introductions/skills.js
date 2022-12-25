import "./styles/introStyle.scss";
import { Player } from "@lottiefiles/react-lottie-player";
//https://devicon.dev/
function Skills({ isLoaded }) {
  return (
    <div className="skills">
      <div>
        <h1
          className={
            isLoaded ? "animate__animated animate__backInLeft" : "unloaded"
          }
        >
          My Skills
        </h1>
        <div
          className={
            isLoaded ? "animate__animated animate__backInLeft" : "unloaded"
          }
        >
          <h2>Languages</h2>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
            alt="js"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
            alt="ts"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
            alt="h5"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
            alt="css"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
            alt="sass"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
            alt="java"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
            alt="python"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
            alt="node"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
            alt="php"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
            alt="c#"
          />
        </div>
        <div
          className={
            isLoaded ? "animate__animated animate__backInRight" : "unloaded"
          }
        >
          <h2>Frontend Frameworks</h2>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
            alt="react"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
            alt="angular"
          />
        </div>
        <div
          className={
            isLoaded ? "animate__animated animate__backInLeft" : "unloaded"
          }
        >
          <h2>Database</h2>

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg"
            alt="mysql"
          />

          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain-wordmark.svg"
            alt="mongo"
          />
        </div>
        <div
          className={
            isLoaded ? "animate__animated animate__backInRight" : "unloaded"
          }
        >
          <h2>Tools and Libraries</h2>
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
            alt="unity"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
            alt="redux"
          />{" "}
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg"
            alt="jest"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/photoshop/photoshop-line.svg"
            alt="ps"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/illustrator/illustrator-line.svg"
            alt="ai"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/aftereffects/aftereffects-original.svg"
            alt="ae"
          />
          <img src="/portfolio/images/indesign.svg" alt="id" />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
            alt="figma"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/androidstudio/androidstudio-original.svg"
            alt="android studio"
          />
          <img
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
            alt="linux"
          />
        </div>
      </div>
      <Player
        autoplay
        loop
        src="https://assets4.lottiefiles.com/private_files/lf30_obidsi0t.json"
        // style={{ height: "auto", width: "500px" }}
        className={
          isLoaded ? "skillImg animate__animated animate__zoomIn" : "unloaded"
        }
      />
    </div>
  );
}

export default Skills;
