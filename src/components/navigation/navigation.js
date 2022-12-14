import "./navStyle.scss";

function Navigation({ fullpageApi }) {
  return (
    // <div className="nav">
    //   <span onClick={() => fullpageApi.moveTo("page1", 1)}>About Me</span>
    //   <span onClick={() => fullpageApi.moveTo("page2", 1)}>Skills</span>
    //   <span onClick={() => fullpageApi.moveTo("page3", 1)}>Education</span>
    //   <span onClick={() => fullpageApi.moveTo("page4", 1)}>Experiences</span>
    //   <span onClick={() => fullpageApi.moveTo("page5", 1)}>Projects</span>
    //   {/* <span onClick={() => fullpageApi.moveTo("page6", 1)}>Contact Me</span> */}
    // </div>
    <ul id="nav">
      <li onClick={() => fullpageApi.moveTo("page1", 1)}>About Me</li>
      <li onClick={() => fullpageApi.moveTo("page2", 1)}>Skills</li>
      <li onClick={() => fullpageApi.moveTo("page3", 1)}>Education</li>
      <li onClick={() => fullpageApi.moveTo("page4", 1)}>Experiences</li>
      <li onClick={() => fullpageApi.moveTo("page5", 1)}>Projects</li>
    </ul>
  );
}

export default Navigation;
