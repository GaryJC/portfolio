import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from "./components/introductions/aboutMe";
import Education from "./components/introductions/education";
import Skills from "./components/introductions/skills";
import Experiences from "./components/experiences/experiences";
import Projects from "./components/projects/projects";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import Navigation from "./components/navigation/navigation";
function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"3F9601FB-2B574E9F-BBEE354F-00C21111"}
      scrollingSpeed={1000} /* Options here */
      navigation
      anchors={["page1", "page2", "page3", "page4", "page5", "page6"]}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Navigation fullpageApi={fullpageApi} />
              <AboutMe />
            </div>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <Education />
            </div>
            <div className="section">
              <Experiences />
            </div>
            <div className="section">
              <Projects />
            </div>
            {/* <div className="section">
              <Contact />
            </div> */}
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
