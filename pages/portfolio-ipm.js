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
import portfolio_eli_thumbnail from "../public/portfolio_eli_00.jpg";
import portfolio_weather_thumbnail from "../public/portfolio_weather_00.jpg";
import portfolio_angelo_thumbnail from "../public/portfolio_angelo_00.jpg";
import "yet-another-react-lightbox/styles.css";
import styles from "../styles/pages/_portfolio.module.scss";


function PortfolioIpm() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>
          E-commerce Website Design for IPM | Angelo Front-End Dev ::
        </title>
        <meta
          name="description"
          content="Revive your love for classic games with IPM - the Retro Game
                Website."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.portfolioTitle}>IPM E-commerce ::</h1>
            <h2 className={styles.portfolioSubTitle}>
              E-commerce Project in Progress
            </h2>

            {/*
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <button className={styles.btnStyle}>See Live Preview</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="/"
              >
                <button className={styles.btnStyle}>Source Code</button>
              </a>
            </p>
            */}
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
                      src={"/portfolio_ipm_00.jpg"}
                      alt="IPM E-commerce Cover"
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
              { src: "/portfolio_ipm_00.jpg", alt: "IPM E-commerce Cover" },
            ]}
          />
        </Container>

        {/* "SECTION Portfolio IPM" */}
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
                IPM is a fictional retro game e-commerce business that
                specializes in selling classic video games, consoles, and
                accessories from previous generations. To streamline its online
                operations, IPM has turned to Next.js, Sanity CMS, and PayPal to
                create a fast, secure, and user-friendly e-commerce site.
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
                &#9675; Website E-commerce
                <br />
                &#9675; Logo Branding
              </p>

              <p className={styles.portfolioContentTitle}>Built With ::</p>

              <p className={styles.portfolioContentText}>
                &#9675; HTML5 / CSS3
                <br />
                &#9675; Material-UI - v5.11.7
                <br />
                &#9675; NextJS - v13.0.4
                <br />
                &#9675; Sanity Headless CMS - v3.4.1
                <br />
                &#9675; Paypal
                <br />
                {/* &#9675; Hosted on Netlify */}
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

            {/* "SECTION Portfolio - Weather App" */}
            <Col
              md={10}
              lg={4}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>
                <Link href="/portfolio-weather">
                  <Image
                    className={styles.projectThumbnail}
                    src={portfolio_weather_thumbnail}
                    alt="Portfolio Weather App"
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

export default PortfolioIpm;
