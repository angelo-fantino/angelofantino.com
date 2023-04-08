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


function PortfolioAngelo() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>Portfolio Angelo | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="Angelo Fantino is my personal portfolio. The website has been
                built using Next.js and SCSS, with a sci-fi theme inspired by
                the animes Ghost In The Shell and Neon Genesis Evangelion."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.portfolioTitle}>Portfolio Angelo ::</h1>
            <h2 className={styles.portfolioSubTitle}>
              Website Design And Development
            </h2>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/angelo-fantino/angelofantino.com"
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
                      src={"/portfolio_angelo_00.jpg"}
                      alt="Portfolio Angelo Cover"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_angelo_01.jpg"}
                      alt="Portfolio Angelo Laptop Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_angelo_02.jpg"}
                      alt="Portfolio Angelo Tablet Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_angelo_03.jpg"}
                      alt="Portfolio Angelo Smartphone Screen"
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
              { src: "/portfolio_angelo_00.jpg", alt: "Portfolio Angelo Cover" },
              {
                src: "/portfolio_angelo_01.jpg",
                alt: "Portfolio Angelo Laptop Screen",
              },
              {
                src: "/portfolio_angelo_02.jpg",
                alt: "Portfolio Angelo Tablet Screen",
              },
              {
                src: "/portfolio_angelo_03.jpg",
                alt: "Portfolio Angelo Smartphone Screen",
              },
            ]}
          />
        </Container>

        {/* "SECTION Portfolio Angelo" */}
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
                Angelo Fantino is my personal portfolio. The website has been
                built using Next.js and SCSS, with a sci-fi theme inspired by
                the animes Ghost In The Shell and Neon Genesis Evangelion.
              </p>

              <p className={styles.portfolioContentText}>
                Upon landing on the website, the visitors are greeted with a
                banner section followed by a brief introduction to the
                importance of digital presence nowadays. The website has a dark
                colour scheme with red and grey accents, reminiscent of the
                futuristic aesthetic of anime{"'"}s mecha.
              </p>

              <p className={styles.portfolioContentText}>
                The portfolio website sections include the main page, services,
                portfolio, and contact.
              </p>

              <p className={styles.portfolioContentText}>
                The website is hosted on Netlify, a cloud hosting solution for
                static websites.
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
                &#9675; Website Development
                <br />
                &#9675; Logo Branding
              </p>

              <p className={styles.portfolioContentTitle}>Built With ::</p>

              <p className={styles.portfolioContentText}>
                &#9675; HTML5 / CSS3
                <br />
                &#9675; React Bootstrap - v2.5.0
                <br />
                &#9675; Scss {"( Sass )"} - v1.55.0
                <br />
                &#9675; NextJS - v12.3.1
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
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default PortfolioAngelo;
