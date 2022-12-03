import Contact from "../contact/contact";
import { Player } from "@lottiefiles/react-lottie-player";
function AboutMe() {
  return (
    <div className="aboutMe">
      {/* <img
        id="portrait"
        src={process.env.PUBLIC_URL + "/images/portrait.jpg"}
        alt="Avatar"
      ></img> */}
      <Player
        autoplay
        loop
        src="https://lottie.host/de68c714-701e-451a-a928-62d0ff05f0d6/NSOaHmy5PD.json"
        // style={{ height: "500px", width: "500px" }}
        id="portrait"
        className="animate__animated animate__zoomIn"
      />
      <div>
        <h1 className="animate__animated animate__bounceInDown">
          Hi all, I'm Gary
        </h1>

        <p className="animate__animated animate__fadeInUp">
          I'm a new grad and looking for a job relative to full-stack
          development. I've completed my bachelor's degree from SFU in
          Interactive Arts and Technology, and I graduated with my master's
          degree in Information Technology from the University of Melbourne.
          I've been studying and working on web development and UI/UX design
          four more than 5 years. I am proficient with JavaScript, HTML, CSS,
          NodeJs, React, and Angular. I am also experience with PHP, Java,
          Pyhton and C#.
        </p>
        <Contact />
      </div>
    </div>
  );
}
export default AboutMe;
