import Head from "next/head";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin, FaTwitter, FaBlogger } from "react-icons/fa";
import styles from "../styles/pages/_about.module.scss";

function About() {
  return (
    <>
      {/* "SECTION Head" */}
      <Head>
        <title>How And Where To Find Me | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="My contact channels are available through e-mail and social networks. You can check out the technologies I am using also."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* "SECTION Title Subtitle" */}
      <Container className={styles.containerSpacing}>
        <Row className="animate__animated animate__fadeInUp">
          <Col sm={12}>
            <h1 className={styles.aboutTitle}>CONTACT CHANNELS ::</h1>
            <h2 className={styles.aboutSubTitle}>
              <a rel="noreferrer" href="mailto:fantino.angelo@gmail.com">
                fantino.angelo@gmail.com
              </a>
            </h2>
            <p className={styles.aboutContentText}>
              <a target="_blank" href="/Angelo-Resume_v1-min.pdf">
                CURRICULUM
              </a>
            </p>
          </Col>
        </Row>
      </Container>

      {/* "SECTION Content" */}
      <Container className={`animate__animated animate__fadeInUp`}>
        {/* "SECTION Social Links" */}
        <Row
          className={`${styles.containerSpacing} animate__animated animate__fadeInUp justify-content-center`}
        >
          <Col sm="auto">
            <div className={styles.aboutContentText}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/angelo-fantino"
              >
                <FaGithub /> GitHub
              </a>
            </div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/angelo-fantino"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/angelo_fantino"
              >
                <FaTwitter /> Twitter
              </a>
            </div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://angelo4b3.blogspot.com/"
              >
                <FaBlogger /> Blogger
              </a>
            </div>
          </Col>
        </Row>

        {/* "SECTION Dev Tools" */}
        <Row
          className={`${styles.containerSpacing} animate__animated animate__fadeInUp justify-content-center`}
        >
          <Col sm={12}>
            <div className={styles.aboutContentText}>
              &#9827; Technologies and DevTools:
            </div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>HTML5</div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>CSS3</div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>React-Bootstrap</div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>React.js</div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>Next.js</div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>WordPress</div>
          </Col>

          <Col sm="auto">
            <div className={styles.aboutContentText}>VS Code</div>
          </Col>
        </Row>

        {/* "SECTION About Me" */}
        <Row
          className={`${styles.containerSpacing} ${styles.containerBG} animate__animated animate__fadeInUp justify-content-center`}
        >
          <Col xs={10} xl={8} xxl={7}>
            <h3 className={styles.aboutSubTitle}>ABOUT ME ::</h3>
            <p className={styles.aboutMeText}>
              What attracts me to technology is the possibility of creating
              anything my skill makes possible.
            </p>

            <p className={styles.aboutMeText}>
              Just as the craftsman materializes his own idea or someone{" "}
              {"else's"}, the developer, in his own way, does it as well. Both
              manage to impact {"people's"} lives positively.
            </p>
            <p className={styles.aboutMeText}>
              {" "}
              I believe that through this tool, I can contribute something good
              as I have received, even if indirectly, throughout my life through
              art, technology and texts.
            </p>

            <p className={styles.aboutMeText}>
              {'"All life is a servitude"'}, so said, Seneca On the Shortness of
              Life.
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default About;
