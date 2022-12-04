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
      <div className="expCard">
        <img src={process.env.PUBLIC_URL + `${logoSrc}`} alt="aiTai" />
        <h3 style={{ fontWeight: "bold" }}>{companyName}</h3>
        <p style={{ fontSize: "0.8rem" }}>{location}</p>
        <span style={{ fontSize: "1rem" }}>{title}</span>
        <div style={{ fontSize: "0.8rem" }}>{period}</div>
        {details}
      </div>
    </>
  );
}

export default ExperienceCard;
