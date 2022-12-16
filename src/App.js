import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from "./components/introductions/aboutMe";
import Education from "./components/introductions/education";
import Skills from "./components/introductions/skills";
import Experiences from "./components/experiences/experiences";
import Projects from "./components/projects/projects";
import Navigation from "./components/navigation/navigation";
import ReactGa from "react-ga";
import "./App.scss";
import { useEffect } from "react";
function App() {
  const sectionLoaded = [false, false, false, false, false];

  useEffect(() => {
    ReactGa.initialize("G-3MM6QB46LL");
    ReactGa.pageview("/");
  }, []);

  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"3F9601FB-2B574E9F-BBEE354F-00C21111"}
      scrollingSpeed={1000} /* Options here */
      navigation
      anchors={["page1", "page2", "page3", "page4", "page5", "page6"]}
      // controlArrows={false}
      verticalCentered={true}
      // slidesNavigation={true}
      afterLoad={(section, origin, destination, direction, trigger) => {
        // console.log(origin.anchor);
        //first slide of the second section
        if (origin.index === 1) {
          // alert("Second slide loaded");
          sectionLoaded[1] = true;
        }
        if (origin.index === 2) {
          // alert("Second slide loaded");
          sectionLoaded[2] = true;
        }
        if (origin.index === 3) {
          // alert("Second slide loaded");
          sectionLoaded[3] = true;
        }
        if (origin.index === 4) {
          // alert("Second slide loaded");
          sectionLoaded[4] = true;
        }
      }}
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Navigation fullpageApi={fullpageApi} />
              <AboutMe />
            </div>
            <div className="section section2">
              <Skills isLoaded={sectionLoaded[1]} />
            </div>
            <div className="section">
              <Education isLoaded={sectionLoaded[2]} />
            </div>
            <div className="section">
              <Experiences isLoaded={sectionLoaded[3]} />
            </div>
            <div className="section">
              <Projects isLoaded={sectionLoaded[4]} />
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
