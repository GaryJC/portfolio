import ProjectCard from "./projectCard";

function MessagePoster() {
  const coverImg = "/images/messagePosting.JPG";
  const redirectLink = "https://github.com/GaryJC/MEAN-Stack-Application";
  const cardTitle = "Message Posting Web Application";
  const cardDescription =
    "I developed a web application using TypeScript, Angular, NodeJs and MongoDB";
  const techIcon = (
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

export default MessagePoster;
