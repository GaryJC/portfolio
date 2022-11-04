import ProjectCard from "./projectCard";

function UnityGames() {
  const coverImg = "/images/unityGame.JPG";
  const redirectLink = "https://garyjc.github.io/PersonalPortfolio/";
  const cardTitle = "Unity Games";
  const cardDescription = "I developed games using Unity3D, C# and Maya";
  const techIcon = (
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
  );
  const linkIcon = (
    <>
      <img
        src="https://img.icons8.com/color/48/000000/youtube-play.png"
        alt="youtube"
        onClick={() => {
          window.open("https://www.youtube.com/watch?v=eipqSPU8rV0&t=222s");
        }}
      />
    </>
  );
  return (
    <ProjectCard
      coverImg={coverImg}
      redirectLink={redirectLink}
      cardTitle={cardTitle}
      cardDescription={cardDescription}
      techIcon={techIcon}
      linkIcon={linkIcon}
    />
  );
}

export default UnityGames;
