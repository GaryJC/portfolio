import ProjectCard from "./projectCard";

function AndroidApp() {
  const coverImg = "/images/stepCounter.JPG";
  const redirectLink = "https://github.com/GaryJC/StepCounterApp";
  const cardTitle = "Step Counter Android App";
  const cardDescription =
    "I developed a step counter Anroid App using Java and Android Studio";
  const techIcon = (
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

export default AndroidApp;
