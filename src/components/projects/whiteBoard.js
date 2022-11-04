import ProjectCard from "./projectCard";

function WhiteBoard() {
  const coverImg = "/images/whiteBoard.JPG";
  const redirectLink = "https://github.com/GaryJC/DistributedSharedWhiteBoard";
  const cardTitle = "Distributed shared whiteboard";
  const cardDescription =
    "I developed a distributed shared whiteboard using Java and TCP Socket";
  const techIcon = (
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
  );
  const linkIcon = (
    <>
      <img
        src="https://img.icons8.com/color/48/000000/youtube-play.png"
        alt="youtube"
        onClick={() => {
          alert("youtube");
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
      // linkIcon={linkIcon}
    />
  );
}

export default WhiteBoard;
