function Education() {
  return (
    <div class="edu">
      <h1>Education</h1>
      <div className="schoolInfo">
        <img
          src={process.env.PUBLIC_URL + "/images/unimelbLogo.png"}
          alt="unimelb"
        />
        <div>
          <h2>University of Melbourne</h2>
          <div style={{ fontWeight: "bold" }}>
            Master of Information Technology
          </div>
          <div>March 2021 - July 2022</div>
        </div>
      </div>
      <div className="schoolInfo">
        <img src={process.env.PUBLIC_URL + "/images/sfuLogo.png"} alt="sfu" />
        <div>
          <h2>Simon Fraser University</h2>
          <div style={{ fontWeight: "bold" }}>
            Bachelor of Science - Interactive Arts and Technology
          </div>
          <div>September 2015 - December 2020</div>
        </div>
      </div>
    </div>
  );
}

export default Education;
