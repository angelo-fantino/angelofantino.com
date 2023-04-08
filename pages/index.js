import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Carousel from "react-bootstrap/Carousel";
import topBanner from "../public/top-banner.png";
import sciFiCircle from "../public/sci-fi-circle.png";
import slide01 from "../public/slide01.png";
import slide02 from "../public/slide02.png";
import styles from "../styles/pages/_home.module.scss";

export default function Home() {
  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>Angelo / Front-End Developer / Freelancer ::</title>
        <meta
          name="description"
          content="Crafting bespoke web solutions tailored to your unique requirements 
                utilizing JavaScript libraries, frameworks, and DevTools to deliver 
                personalized web solutions that meet your specifications and reflect your 
                vision and stand out in the digital landscape."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Top Banner Image" */}
      <div className={styles.wrapper}>
        <div className={styles.topBanner}>
          <Image src={topBanner} alt="Angelo Front-End Developer Top Banner" />
        </div>

        <div className={styles.sciFiCircle}>
          <Image
            src={sciFiCircle}
            alt="Angelo Front-End Developer Top Banner"
          />
        </div>
      </div>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.homeTitle}>
              Angelo / Front-End Developer / Freelancer ::
            </h1>
            <h2 className={styles.homeSubTitle}>
              The aim is to deliver reliable and valuable responsive websites to
              your business, based on the type of objective the client expects.
            </h2>
          </Col>
        </Row>
      </Container>

      {/* "SECTION Content" */}
      <Container fluid className={styles.containerSkew}>
        <Row className={styles.containerUnskew}>
          <Row className="justify-content-center">
            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.homeContentText}>
                Over the years, the web and the world have changed, and a
                digital presence gives your brand an excellent way to
                communicate with your public.
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.homeContentText}>
                More opportunities to show who you are as a brand to your end
                users and more than just your website, apps or derivatives, your
                digital presence expands to all the touch points a consumer may
                have with your brand online.
              </p>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col
              sm={6}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <Carousel
                controls={false}
                pause={false}
                indicators={false}
                fade
                className={styles.imgPosition}
              >
                <Carousel.Item interval={500}>
                  <Image
                    className="d-block w-100"
                    src={slide01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={5}>
                  <Image
                    className="d-block w-100"
                    src={slide02}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={250}>
                  <Image
                    className="d-block w-100"
                    src={slide01}
                    alt="First slide"
                  />
                </Carousel.Item>
                <Carousel.Item interval={3000}>
                  <Image
                    className="d-block w-100"
                    src={slide02}
                    alt="Second slide"
                  />
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>

          <Row className="justify-content-center">
            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.homeContentText}>
                It can also include areas outside of your control, such as
                conversations about your brand on social media and online
                reviews. Consider bolstering your online presence by connecting
                you to information and helpful services.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}
