import Contact from "../contact/contact";

function AboutMe() {
  return (
    <div className="aboutMe">
      <img
        id="portrait"
        src={process.env.PUBLIC_URL + "/images/portrait.jpg"}
        alt="Avatar"
      ></img>
      <div>
        <h1>Hi all, I'm Gary</h1>
        <p>
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
