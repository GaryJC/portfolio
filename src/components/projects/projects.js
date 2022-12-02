import "./styles/projectStyle.scss";
import ProjectCard from "./projectCard";

function Projects() {
  const projects = [
    [
      {
        coverImg: "/images/unityGame.JPG",
        redirectLink: "https://garyjc.github.io/PersonalPortfolio/",
        cardTitle: "Unity Games",
        cardDescription: "I developed games using Unity3D, C# and Maya",
        techIcon: (
          <div className="techIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg"
              alt="unity"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/maya/maya-plain.svg"
              alt="maya"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-plain.svg"
              alt="c#"
            />
          </div>
        ),
        linkIcon: (
          <img
            src="https://img.icons8.com/color/48/000000/youtube-play.png"
            alt="youtube"
            onClick={() => {
              window.open("https://www.youtube.com/watch?v=eipqSPU8rV0&t=222s");
            }}
          />
        ),
      },
      {
        coverImg: "/images/Dashboard.png",
        redirectLink: "https://github.com/COMP90082SM12022/GA-Redback",
        cardTitle: "Garmin Watch Application",
        cardDescription: "I developed a web application for Garmin Watch",
        techIcon: (
          <div className="techIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
              alt="react"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              alt="js"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              alt="css"
            />
          </div>
        ),
      },
      {
        coverImg: "/images/messagePosting.JPG",
        redirectLink: "https://github.com/GaryJC/MEAN-Stack-Application",
        cardTitle: "Message Posting Web Application",
        cardDescription:
          "I developed a web application using TypeScript, Angular, NodeJs and MongoDB",
        techIcon: (
          <div className="techIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-plain.svg"
              alt="angular"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
              alt="ts"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
              alt="node"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
              alt="mongo"
            />
          </div>
        ),
      },
      {
        coverImg: "/images/whiteBoard.JPG",
        redirectLink: "https://github.com/GaryJC/DistributedSharedWhiteBoard",
        cardTitle: "Distributed shared whiteboard",
        cardDescription:
          "I developed a distributed shared whiteboard using Java and TCP Socket",
        techIcon: (
          <div className="techIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="java"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/socketio/socketio-original.svg"
              alt="socket"
            />
          </div>
        ),
      },
    ],
    [
      {
        coverImg: "/images/stepCounter.JPG",
        redirectLink: "https://github.com/GaryJC/StepCounterApp",
        cardTitle: "Step Counter Android App",
        cardDescription:
          "I developed a step counter Anroid App using Java and Android Studio",
        techIcon: (
          <div className="techIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/android/android-plain.svg"
              alt="android"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg"
              alt="java"
            />
          </div>
        ),
      },
      {
        coverImg: "/images/gameShop.png",
        redirectLink: "https://github.com/GaryJC/OnlineGameShop",
        cardTitle: "Game Shop Web Application",
        cardDescription:
          "I developed a game shop web application using PHP, HTML5, and CSS3",
        techIcon: (
          <div className="techIcon">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-plain.svg"
              alt="php"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg"
              alt="mysql"
            />
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-plain.svg"
              alt="h5"
            />

            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
              alt="css"
            />
          </div>
        ),
      },
    ],
  ];

  return (
    <>
      {projects.map((project) => (
        <div className="slide">
          <h1>Projects</h1>
          <div className="eachSlide">
            {project.map((item) => (
              <ProjectCard
                coverImg={item.coverImg}
                redirectLink={item.redirectLink}
                cardTitle={item.cardTitle}
                cardDescription={item.cardDescription}
                techIcon={item.techIcon}
                // linkIcon={project.linkIcon}
              />
            ))}
          </div>
        </div>
      ))}
    </>
  );
}

export default Projects;
