import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import styles from "../styles/pages/_services.module.scss";

function Services() {
  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>Services Provided | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="Responsive websites built in a powerful user interface with HTML5, CSS3, React-Bootstrap, and React.js that fit into any screen size no matter if they are large or small screen."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col>
            <h1 className={styles.servicesTitle}>SERVICES ::</h1>
            <h2 className={styles.servicesSubTitle}>
              Website Solutions / Development Process
            </h2>
          </Col>
        </Row>
      </Container>

      {/* "SECTION Content" */}
      <Container fluid className={styles.containerSkew}>
        <Row className={styles.containerUnskew}>
          <Row className="justify-content-center">
            {/* "SECTION Website Solutions" */}
            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentTitle}>
                Website Solutions ::
                <br />
                Front-End responsive websites that are fast and easy to use
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentText}>
                The responsive websites will be built in a powerful user
                interface with HTML5, CSS3, React-Bootstrap, and React.js that
                fit into any screen size no matter if they are large or small
                screen.
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentText}>
                This helps enhance your {"business's"} online reach shortening
                the barrier of access to your content, service, and promotion,
                to the end user.
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentText}>
                In any case, responsive website design significantly impacts the
                effectiveness of both your website and your marketing
                initiatives.
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <div className={styles.sectionLineEffect}></div>
            </Col>

            {/* "SECTION Development Process" */}
            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentTitle}>
                Development Process ::
                <br />
                In order to help you to reach your aim, the following step process occurs:
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentText}>
                &#9827; Gather Information - Obtain an overall understanding of
                what you want from your project and take a look at your current
                website.
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentText}>
                &#9827; Development - All information will become code and
                responsive for all devices eliminating any bugs before it goes
                live. The process will be developed according to given file
                formats such as Adobe Photoshop
                {" [PSD]"}, Adobe Illustrator {"[Ai]"}, Png or Jpeg.
              </p>
            </Col>

            <Col
              sm={12}
              md={7}
              className={`${styles.containerSpacing} animate__animated animate__fadeInUp`}
            >
              <p className={styles.servicesContentText}>
                &#9827; Deployment - The website goes live to ensure the content 
                is up to date to avoid or fix an eventual issue that may occur to 
                keep the quality of the outcome.
              </p>
            </Col>
          </Row>
        </Row>
      </Container>
    </>
  );
}

export default Services;
