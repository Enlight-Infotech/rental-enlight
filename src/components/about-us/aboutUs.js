import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Card, CardContent, Typography, Box } from "@mui/material";

const team = [
  {
    name: "Sashikant Sharma",
    image: "https://enlightinfotech.com/images/team/people.png",
    description:
      "A passionate developer with strong expertise in UI/UX and front-end architecture.",
  },
  {
    name: "Mandeep Rana",
    image: "https://enlightinfotech.com/images/team/people.png",
    description:
      "Backend specialist skilled in scalable API design, database engineering, and optimizations.",
  },
  {
    name: "Sushant Rajput",
    image: "https://enlightinfotech.com/images/team/people.png",
    description:
      "Creative problem solver with deep experience in cloud deployments & automation.",
  },
  {
    name: "Deepak Kumar",
    image: "https://enlightinfotech.com/images/team/people.png",
    description:
      "Full-stack developer focused on building modern, smooth, and high-performance web apps.",
  },
];

export default function AboutUs() {
  return (
    <Box sx={{ minHeight: "100vh", padding: "32px 0" }}>
      <Container>
        <Typography
          variant="h4"
          align="center"
          sx={{ color: "#495057", mb: 4, fontWeight: "bold" }}
        >
          Our Team
        </Typography>

        <Row>
          {team.map((member, i) => (
            <Col md={3} sm={6} xs={12} key={i} className="mb-4">
              <Box
                sx={{
                  position: "relative",
                  overflow: "hidden",
                  borderRadius: "15px",
                  transition: "0.4s",
                  border: "1px solid #333",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0 0 20px rgba(255,165,0,0.4)",
                  },
                }}
              >
                <Card
                  sx={{
                    background: "#d6d7d9",
                    color: "#fff",
                    height: "300px",
                    borderRadius: "15px",
                    paddingTop: "20px",
                    textAlign: "center",
                  }}
                >
                  {/* Circular Image */}
                  <Box
                    component="img"
                    src={member.image}
                    alt={member.name}
                    sx={{
                      width: "120px",
                      height: "120px",
                      borderRadius: "50%",
                      objectFit: "cover",
                      border: "4px solid #495057",
                      margin: "0 auto",
                      marginBottom: "15px",
                    }}
                  />

                  <CardContent>
                    <Typography
                      variant="h6"
                      sx={{ color: "#495057", fontWeight: "bold" }}
                    >
                      {member.name}
                    </Typography>
                  </CardContent>
                </Card>

                {/* Hover Description Layer */}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "#ff733a",
                    color: "#f2f2f2",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: "20px",
                    textAlign: "center",
                    opacity: 0,
                    transition: "0.4s",
                    fontWeight: 600,
                    "&:hover": {
                      opacity: 1,
                    },
                  }}
                >
                  {member.description}
                </Box>
              </Box>
            </Col>
          ))}
        </Row>
      </Container>
    </Box>
  );
}
