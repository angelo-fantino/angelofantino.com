import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import msn from "../public/404.png";
import styles from "../styles/pages/_about.module.scss";

function Custom404() {
  return (
    <>
      <Head>
        <title>Page Not Found | Angelo Front-End Dev ::</title>
        <meta
          name="description"
          content="Oops! Something went wrong or this page does not exist... Head back to the homepage please."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/*"SECTION Portfolio" */}
      <Container>
        <Row>
          <Col>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Image src={msn} alt="404 Page Not Found" />
            </div>
            <p className={styles.aboutContentText}>
              <Link href="/">Go back to the homepage</Link>
            </p>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Custom404;
