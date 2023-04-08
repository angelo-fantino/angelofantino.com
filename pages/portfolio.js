import * as React from "react";
import Head from "next/head";
import Image from "next/future/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import portfolio_ipm_thumbnail from "../public/portfolio_ipm_00.jpg";
import portfolio_eli_thumbnail from "../public/portfolio_eli_00.jpg";
import portfolio_weather_thumbnail from "../public/portfolio_weather_00.jpg";
import portfolio_angelo_thumbnail from "../public/portfolio_angelo_00.jpg";
import styles from "../styles/pages/_portfolio.module.scss";


function Portfolio() {
  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>Portfolio | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="Explore the selection of my highlighted projects showcasing functional 
                websites that cater to the needs of clients and users."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.portfolioTitle}>PORTFOLIO ::</h1>
            <h2 className={styles.portfolioSubTitle}>
              Explore the selection of my highlighted projects...
            </h2>
          </Col>
        </Row>
      </Container>

      {/* "SECTION Content" */}
      <Container fluid className={styles.containerSkew}>
        <Container className={styles.containerUnskew}>
          <Row className="justify-content-center">
            {/* "SECTION Portfolio - IPM" */}
            <Col
              md={10}
              lg={6}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-ipm">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_ipm_thumbnail}
                    alt="Portfolio IPM"
                    width={636}
                  />
                </Link>
              </p>
            </Col>

            {/* "SECTION Portfolio - Dietitian Eli" */}
            <Col
              md={10}
              lg={6}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-eli">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_eli_thumbnail}
                    alt="Portfolio Dietitian Eli"
                    width={636}
                  />
                </Link>
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            {/* "SECTION Portfolio - Weather App" */}
            <Col
              md={10}
              lg={6}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-weather">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_weather_thumbnail}
                    alt="Portfolio Weather App"
                    width={636}
                  />
                </Link>
              </p>
            </Col>

            {/* "SECTION Portfolio - Angelo" */}
            <Col
              md={10}
              lg={6}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-angelo">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_angelo_thumbnail}
                    alt="Portfolio Angelo"
                    width={636}
                  />
                </Link>
              </p>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Portfolio;
