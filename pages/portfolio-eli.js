import * as React from "react";
import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Lightbox from "yet-another-react-lightbox";
import Carousel from "react-bootstrap/Carousel";
import portfolio_ipm_thumbnail from "../public/portfolio_ipm_00.jpg";
import portfolio_eli_thumbnail from "../public/portfolio_eli_00.jpg";
import portfolio_weather_thumbnail from "../public/portfolio_weather_00.jpg";
import portfolio_angelo_thumbnail from "../public/portfolio_angelo_00.jpg";
import "yet-another-react-lightbox/styles.css";
import styles from "../styles/pages/_portfolio.module.scss";

function PortfolioEli() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>
          Website Design for Dietitian Eli | Angelo Front-End Dev ::
        </title>
        <meta
          name="description"
          content="The whole project was developed for Eli, a registered dietitian in Wales, 
          United Kingdom using WordPress and hosted with a custom domain and business e-mail."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.portfolioTitle}>Dietitian Eli ::</h1>
            <h2 className={styles.portfolioSubTitle}>
              Coaching and Service Website Design
            </h2>
            <p>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://dev-eli-detitian.pantheonsite.io/"
              >
                <button className={styles.btnStyle}>See Live Preview</button>
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
                      src={"/portfolio_eli_00.jpg"}
                      alt="Dietitian Eli Cover"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_eli_01.jpg"}
                      alt="Dietitian Eli Laptop Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_eli_02.jpg"}
                      alt="Dietitian Eli Tablet Screen"
                      width={1920}
                      height={1080}
                    />
                  </Carousel.Item>
                  <Carousel.Item>
                    <Image
                      className={styles.projectThumbnail}
                      onClick={() => setOpen(true)}
                      src={"/portfolio_eli_03.jpg"}
                      alt="Dietitian Eli Smartphone Screen"
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
              { src: "/portfolio_eli_00.jpg", alt: "Dietitian Eli Cover" },
              {
                src: "/portfolio_eli_01.jpg",
                alt: "Dietitian Eli Laptop Screen",
              },
              {
                src: "/portfolio_eli_02.jpg",
                alt: "Dietitian Eli Tablet Screen",
              },
              {
                src: "/portfolio_eli_03.jpg",
                alt: "Dietitian Eli Smartphone Screen",
              },
            ]}
          />
        </Container>

        {/* "SECTION Portfolio Dietitian Eli" */}
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
                The whole project was developed for Eli, a registered dietitian
                in Wales, United Kingdom using WordPress and hosted with a
                custom domain and business e-mail. The website features a clean
                and modern responsive design with easy navigation on any device,
                making it easy for visitors to find the information they need.
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
                &#9675; Logo Rebranding
              </p>

              <p className={styles.portfolioContentTitle}>Built With ::</p>

              <p className={styles.portfolioContentText}>
                &#9675; HTML5 / CSS3
                <br />
                &#9675; WordPress
                <br />
                &#9675; Elementor
              </p>
            </Col>
          </Row>

          <Row
            sm={9}
            md={9}
            className={`${styles.containerSpacing} animate__animated animate__fadeInUp justify-content-center`}
          >
            <div className={styles.sectionLineEffect}></div>
          </Row>

          <Row className="justify-content-center">
            <Col
              lg={8}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.portfolioContentTitle}>Testimonial ::</p>

              <p className={styles.portfolioContentText}>
                <q>
                  <em>
                    Angelo is wonderful to work with - very receptive of what my
                    vision was and how to put that into practice, with excellent
                    communication to keep me in the loop at all times.
                  </em>
                </q>
              </p>

              <p className={styles.portfolioContentText}>
                <q>
                  <em>
                    He has a creative eye to make the website look sleek and
                    neat with details I certainly could not have thought of. He
                    works speedily and adapts the design based on feedback and
                    can bring a beautiful website together quickly and at a
                    cheaper price than stipulated from what prices can be
                    gleaned online.
                  </em>
                </q>
              </p>

              <p className={styles.portfolioContentText}>
                <q>
                  <em>
                    Very happy with my website and experience of working with
                    him, and without a shadow of a doubt would recommend to
                    anyone.
                  </em>
                </q>
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

export default PortfolioEli;
