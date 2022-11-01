import logo from "./logo.svg";
import "./App.css";
import ReactFullpage from "@fullpage/react-fullpage";
import AboutMe from "./components/introductions/aboutMe";
import Education from "./components/introductions/education";
import Skills from "./components/introductions/skills";
import AiTai from "./components/experiences/aiTai";

function App() {
  return (
    <ReactFullpage
      //fullpage options
      licenseKey={"3F9601FB-2B574E9F-BBEE354F-00C21111"}
      scrollingSpeed={1000} /* Options here */
      render={({ state, fullpageApi }) => {
        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <AboutMe />
            </div>
            <div className="section">
              <Skills />
            </div>
            <div className="section">
              <Education />
            </div>
            <div className="section">
              <AiTai />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
}

export default App;
