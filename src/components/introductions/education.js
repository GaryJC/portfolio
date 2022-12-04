import { Player } from "@lottiefiles/react-lottie-player";
function Education({ isLoaded }) {
  return (
    <div className="edu">
      <Player
        autoplay
        // keepLastFrame
        loop
        src="https://assets2.lottiefiles.com/packages/lf20_DMgKk1.json"
        style={{ height: "auto", width: "500px" }}
        id="eduImg"
        className={isLoaded ? "animate__animated animate__zoomIn" : "unloaded"}
      />
      <div>
        <h1
          className={
            isLoaded ? "animate__animated animate__fadeInRightBig" : "unloaded"
          }
        >
          Education
        </h1>

        <div
          className={
            isLoaded
              ? "schoolInfo animate__animated animate__fadeInRightBig"
              : "unloaded schoolInfo"
          }
        >
          <img
            src={process.env.PUBLIC_URL + "/images/unimelbLogo.png"}
            alt="unimelb"
          />
          <div>
            <h2>University of Melbourne</h2>
            <div>Master of Information Technology</div>
            <div>March 2021 - July 2022</div>
          </div>
        </div>
        <div
          className={
            isLoaded
              ? "schoolInfo animate__animated animate__fadeInRightBig"
              : "unloaded schoolInfo"
          }
        >
          <img src={process.env.PUBLIC_URL + "/images/sfuLogo.png"} alt="sfu" />
          <div>
            <h2>Simon Fraser University</h2>
            <div>Bachelor of Science - Interactive Arts and Technology</div>
            <div>September 2015 - December 2020</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Education;
