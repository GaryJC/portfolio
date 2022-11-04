import ProjectCard from "./projectCard";

function GarminWatch() {
  const coverImg = "/images/Dashboard.png";
  const redirectLink = "https://github.com/COMP90082SM12022/GA-Redback";
  const cardTitle = "Garmin Watch Application";
  const cardDescription = "I developed a web application for Garmin Watch";
  const techIcon = (
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
  );
  //   const linkIcon = (
  //     <>
  //       <img
  //         src="https://img.icons8.com/color/48/000000/youtube-play.png"
  //         alt="youtube"
  //         onClick={() => {
  //           alert("youtube");
  //         }}
  //       />
  //     </>
  //   );
  return (
    <ProjectCard
      coverImg={coverImg}
      redirectLink={redirectLink}
      cardTitle={cardTitle}
      cardDescription={cardDescription}
      techIcon={techIcon}
      //   linkIcon={linkIcon}
    />
  );
}

export default GarminWatch;
