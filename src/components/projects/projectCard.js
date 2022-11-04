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
  console.log(coverImg);
  return (
    <div className="site-card-border-less-wrapper">
      {linkIcon ? (
        <Card
          hoverable
          style={{
            width: "20vw",
          }}
          cover={
            <img
              alt="example"
              src={process.env.PUBLIC_URL + coverImg}
              style={{ height: "20vh" }}
            />
          }
          actions={[linkIcon]}
          onClick={() => window.open(redirectLink)}
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
            width: "20vw",
          }}
          cover={
            <img
              alt="example"
              src={process.env.PUBLIC_URL + coverImg}
              style={{ height: "20vh" }}
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
