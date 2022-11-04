import ProjectCard from "./projectCard";

function GameShop() {
  const coverImg = "/images/gameShop.png";
  const redirectLink = "https://github.com/GaryJC/OnlineGameShop";
  const cardTitle = "Game Shop Web Application";
  const cardDescription =
    "I developed a game shop web application using PHP, HTML5, and CSS3";
  const techIcon = (
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

export default GameShop;
