import ExperienceCard from "./experienceCard";

function AiTai() {
  const logoSrc = "/images/aitaiLogo.jfif";
  const title = "Frontend Developer Intern";
  const companyName = "AiTai Technology";
  const location = "Shanghai, China";
  const period = "Feb 2021 – May 2021";
  const details = (
    <ul>
      <li>
        Co-designed UI/UX for a financial management web application using
        Figma; collaborated with the UI/UX team to finalize the frontend design
      </li>
      <li>
        Implemented web frontend utilizing adaptive and responsive design using
        JavaScript, React Hooks, Ant Design, and CSS3; utilized Axios to invoke
        RESTful APIs for CRUD operations of KPI data.
      </li>
      <li>
        Communicated with the PM team to determine data to be displayed in
        frontend; integrated multiple KPI data charts to the webpage using
        ECharts.
      </li>
      <li>
        Collaborated with the backend team to tweak the design of APIs that
        return processed data instead of raw data to improve the performance of
        the frontend.
      </li>
      <li>
        Worked in an Agile environment utilizing a Test-driven Development
        approach; participated in Scrum meetings as a scrum member; managed
        lifecycle of issues using Jira.
      </li>
    </ul>
  );
  return (
    <div>
      <ExperienceCard
        logoSrc={logoSrc}
        title={title}
        companyName={companyName}
        location={location}
        period={period}
        details={details}
      />
    </div>
  );
}

export default AiTai;
