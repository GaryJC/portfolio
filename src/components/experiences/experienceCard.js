function ExperienceCard({
  logoSrc,
  title,
  companyName,
  location,
  period,
  details,
}) {
  return (
    <>
      <h1>Experiences</h1>
      <div className="expCard">
        <img src={process.env.PUBLIC_URL + `${logoSrc}`} alt="aiTai" />
        <h3>{companyName}</h3>
        <span>{location}</span>
        <h3>{title}</h3>
        <div>{period}</div>
        {details}
      </div>
    </>
  );
}

export default ExperienceCard;
