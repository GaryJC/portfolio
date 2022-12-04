import ExperienceCard from "./experienceCard";
import { Player } from "@lottiefiles/react-lottie-player";
import "./styles/expStyle.scss";
function Experiences({ isLoaded }) {
  const expInfo = [
    {
      logoSrc: "/images/aitaiLogo.jfif",
      title: "Frontend Developer Intern",
      companyName: "AiTai Technology",
      location: "Shanghai, China",
      period: "Feb 2021 – May 2021",
      details: (
        <ul>
          <li>
            Co-designed UI/UX for a financial management web application using
            Figma; collaborated with the UI/UX team to finalize the frontend
            design
          </li>
          <li>
            Implemented web frontend utilizing adaptive and responsive design
            using JavaScript, React Hooks, Ant Design, and CSS3; utilized Axios
            to invoke RESTful APIs for CRUD operations of KPI data.
          </li>
          <li>
            Communicated with the PM team to determine data to be displayed in
            frontend; integrated multiple KPI data charts to the webpage using
            ECharts.
          </li>
          <li>
            Collaborated with the backend team to tweak the design of APIs that
            return processed data instead of raw data to improve the performance
            of the frontend.
          </li>
          <li>
            Worked in an Agile environment utilizing a Test-driven Development
            approach; participated in Scrum meetings as a scrum member; managed
            lifecycle of issues using Jira.
          </li>
        </ul>
      ),
    },
  ];
  return (
    <div style={{ overflow: "hidden" }}>
      <h1 style={{ textAlign: "center" }}>Experiences</h1>
      <div
        className={
          isLoaded ? "exp animate__animated animate__flipInY" : "unloaded exp"
        }
      >
        {expInfo.map((item, index) => (
          <ExperienceCard
            key={index}
            logoSrc={item.logoSrc}
            title={item.title}
            companyName={item.companyName}
            location={item.location}
            period={item.period}
            details={item.details}
          />
        ))}
      </div>
      <Player
        autoplay
        loop
        src="https://assets1.lottiefiles.com/packages/lf20_opea6x2q.json"
        className="expImg"
      />
    </div>
  );
}

export default Experiences;
