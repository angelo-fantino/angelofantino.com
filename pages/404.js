import Head from "next/head";
import Image from "next/image";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import msn from "../public/404.png";
import styles from "../styles/abstracts/_variables.module.scss";

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
              <Image
                src={msn}
                alt="404 Page Not Found"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Custom404;
