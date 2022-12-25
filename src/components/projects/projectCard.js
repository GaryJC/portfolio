import { Card } from "antd";
const { Meta } = Card;

function ProjectCard({
  coverImg,
  redirectLink,
  cardTitle,
  cardDescription,
  techIcon,
  linkIcon,
}) {
  // console.log(linkIcon);
  return (
    <div className="site-card-border-less-wrapper proCard">
      {linkIcon ? (
        <Card
          hoverable
          style={{
            width: "20rem",
            borderRadius: "20px",
          }}
          cover={
            <img
              alt="example"
              src={process.env.PUBLIC_URL + coverImg}
              style={{ width: "20rem", borderRadius: "20px 20px 0 0" }}
            />
          }
          onClick={() => window.open(redirectLink)}
          actions={[linkIcon]}
        >
          {techIcon}
          <Meta
            title={cardTitle}
            description={cardDescription}
            style={{ justifyContent: "center", textAlign: "center" }}
          />
        </Card>
      ) : (
        <Card
          hoverable
          style={{
            width: "20rem",
            borderRadius: "20px",
          }}
          cover={
            <img
              alt="example"
              src={process.env.PUBLIC_URL + coverImg}
              style={{ width: "20rem", borderRadius: "20px 20px 0 0" }}
            />
          }
          onClick={() => window.open(redirectLink)}
        >
          {techIcon}
          <Meta
            title={cardTitle}
            description={cardDescription}
            style={{ justifyContent: "center", textAlign: "center" }}
          />
        </Card>
      )}
    </div>
  );
}

export default ProjectCard;
