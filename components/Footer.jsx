import Image from "next/image";
import Link from "next/link";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { FaGithub, FaLinkedin, FaTwitter, FaBlogger } from "react-icons/fa";
import navLogoName from "../public/nav_logo_name.png";
import styles from "../styles/layout/_footer.module.scss";

function Footer() {
  return (
    <>
      <Container className={styles.footerLineEffect}></Container>

      <Container className={styles.footerBottom}>
        <Row className="justify-content-center">
          <Col md={4}>
            <p>
              <strong>Website Sections</strong>
            </p>
            <p>
              <Link href="/services">Services</Link>
              <br />
              <Link href="/portfolio">Portfolio</Link>
              <br />
              <Link href="/about">Contact</Link>
              <br />
            </p>
          </Col>

          <Col md={4}>
            <p>
              <strong>Find me on:</strong>
            </p>

            <p className="footerIconSize">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/angelo-fantino"
              >
                <FaGithub />
              </a>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/angelo-fantino"
              >
                <FaLinkedin />
              </a>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://twitter.com/angelo_fantino"
              >
                <FaTwitter />
              </a>{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://angelo4b3.blogspot.com/"
              >
                <FaBlogger />
              </a>
            </p>
            <br />
          </Col>

          <Col md={4}>
            <p>
              <Image src={navLogoName} alt="Angelo Front End Developer logo" />
            </p>
            <p>
              This responsive web site has been designed, developed, and
              maintained by Angelo Fantino
            </p>
          </Col>
        </Row>
        <Row>
          <Col>&#9827; 2022 - Angelo Fantino</Col>
        </Row>
      </Container>
    </>
  );
}

export default Footer;
