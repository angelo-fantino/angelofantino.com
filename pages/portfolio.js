import * as React from "react";
import Head from "next/head";
import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Project01 from "../components/Project01";
import projects_thumbnail01 from "../public/projects_thumbnail01.png";
import projects_prog_thumbnail from "../public/projects_prog_thumbnail.png";
import styles from "../styles/pages/_portfolio.module.scss";

function Portfolio() {
  const [modalShow, setModalShow] = React.useState(false);

  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>Portfolio | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="Web solutions personalized on provided specifications. Use of JavaScript libraries, frameworks, and DevTools."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.portfolioTitle}>PORTFOLIO ::</h1>
            <h2 className={styles.portfolioSubTitle}>Weather App / Website</h2>
          </Col>
        </Row>
      </Container>

      {/* "SECTION Content" */}
      <Container fluid className={styles.containerSkew}>
        <Container className={styles.containerUnskew}>
          {/* "SECTION Project 01 - Weather App" */}
          <Row className="justify-content-center">
            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>Weather App ::</p>

              <p className={styles.portfolioContentText}>
                This responsive weather application fetches the weather
                information typed by the user and displays it on the screen. The
                application shows the current weather and the next six days
                ahead. The application was built with React.js and OpenWeather
                API.
              </p>

              <p className={styles.portfolioContentText}>
                The features of the weather application are: completely
                responsive, weather icons, the temperature in celsius, weather
                description, humidity level and wind speed, the city, the
                country, the days of the week, and maximum and minimum
                temperature.
              </p>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://triduum-weather-app.netlify.app/"
              >
                <button className={styles.btnStyle}>See Live Preview</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/angelo-fantino/weather-app"
              >
                <button className={styles.btnStyle}>Source Code</button>
              </a>
            </Col>

            <Col
              md={10}
              lg={8}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <Image
                className={styles.projectThumbnail}
                onClick={() => setModalShow(true)}
                src={projects_thumbnail01}
                alt="Project 01, Weather App"
              />

              <Project01 show={modalShow} onHide={() => setModalShow(false)} />
            </Col>
          </Row>

          <Row
            sm={9}
            md={9}
            className={`${styles.containerSpacing} animate__animated animate__fadeInUp justify-content-center`}
          >
            <div className={styles.sectionLineEffect}></div>
          </Row>

          {/* "SECTION Project 02 - IPM - Retro Game Website" */}
          <Row className="justify-content-center">
            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                Retro Game Website ::
              </p>

              <p className={styles.portfolioContentText}>
                IPM - Retro Game Website. This retro gaming site will give you a
                little taste of some classic games.
              </p>
            </Col>

            <Col
              md={10}
              lg={8}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <Image
                className="imageContent"
                src={projects_prog_thumbnail}
                alt="Project in progress"
              />
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Portfolio;
