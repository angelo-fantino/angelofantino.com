import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "yet-another-react-lightbox";
import Carousel from 'react-bootstrap/Carousel';
import portfolio_ipm_thumbnail from "../public/portfolio_ipm_00.jpg";
import portfolio_eli_thumbnail from "../public/portfolio_eli_00.jpg";
import portfolio_weather_thumbnail from "../public/portfolio_weather_00.jpg";
import portfolio_angelo_thumbnail from "../public/portfolio_angelo_00.jpg";
import "yet-another-react-lightbox/styles.css";
import styles from "../styles/pages/_portfolio.module.scss";


function PortfolioWeather() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>Weather App | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="Weather application that fetches the weather
                information typed by the user and displays it on the screen. The
                application shows the current weather and the next six days
                ahead."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.portfolioTitle}>Weather App ::</h1>
            <h2 className={styles.portfolioSubTitle}>Website Design And Application</h2>
            <p>
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
            </p>
          </Col>
        </Row>
      </Container>

      {/* "SECTION Content" */}
      <Container fluid className={styles.containerSkew}>
        {/* "SECTION Banner" */}
        <Container fluid className={styles.containerUnskew}>
          <Container className="animate__animated animate__fadeInUp">
            <Row className="justify-content-center">
              <Col>
                <Carousel fade>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_weather_00.jpg"}
                      alt="Weather App Cover"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_weather_01.jpg"}
                      alt="Weather App Laptop Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_weather_02.jpg"}
                      alt="Weather App Tablet Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_weather_03.jpg"}
                      alt="Weather App Smartphone Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                </Carousel>
              </Col>
            </Row>
          </Container>

          <Lightbox
            open={open}
            close={() => setOpen(false)}
            slides={[
              { src: "/portfolio_weather_00.jpg", alt: "Weather App Cover" },
              {
                src: "/portfolio_weather_01.jpg",
                alt: "Weather App Laptop Screen",
              },
              {
                src: "/portfolio_weather_02.jpg",
                alt: "Weather App Tablet Screen",
              },
              {
                src: "/portfolio_weather_03.jpg",
                alt: "Weather App Smartphone Screen",
              },
            ]}
          />
        </Container>

        {/* "SECTION Portfolio Weather App" */}
        <Container className={styles.containerUnskew}>
          <Row className="justify-content-center">
            <Col
              md={10}
              lg={8}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                About The Project ::
              </p>

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
            </Col>

            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>Involvement ::</p>

              <p className={styles.portfolioContentText}>
                &#9675; Web Design
                <br />
                &#9675; Website Application
              </p>

              <p className={styles.portfolioContentTitle}>Built With ::</p>

              <p className={styles.portfolioContentText}>
                &#9675; HTML5 / CSS3
                <br />
                &#9675; React Bootstrap - v2.5.0
                <br />
                &#9675; ReactJS - v18.2.0
                <br />
                &#9675; OpenWeather RESTful API
                <br />
                &#9675; Hosted on Netlify
              </p>
            </Col>
          </Row>
        </Container>
      </Container>

      {/* "SECTION More Highlighted Projects" */}
      <Container fluid className={styles.containerSkew}>
        <Container fluid className={styles.containerUnskew}>
          <Row className="justify-content-center">
            <p className={styles.portfolioContentTitle}>
              More Highlighted Projects ::
            </p>
            {/* "SECTION Portfolio - IPM" */}
            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-ipm">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_ipm_thumbnail}
                    alt="Portfolio IPM"
                    width={636}
                    height={357}
                  />
                </Link>
              </p>
            </Col>

            {/* "SECTION Portfolio - Dietitian Eli" */}
            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-eli">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_eli_thumbnail}
                    alt="Portfolio Dietitian Eli"
                    width={636}
                    height={357}
                  />
                </Link>
              </p>
            </Col>

            {/* "SECTION Portfolio - Angelo" */}
            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-angelo">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_angelo_thumbnail}
                    alt="Portfolio Angelo"
                    width={636}
                    height={357}
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

export default PortfolioWeather;
