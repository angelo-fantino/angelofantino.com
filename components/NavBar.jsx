import Image from "next/future/image";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import navLogoName from "../public/nav_logo_name.png";
import styles from "../styles/layout/_navbar.module.scss";

function NavBar() {
  return (
    <>
      <Navbar
        className={styles.navBarBG}
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="/">            
            <Image src={navLogoName} alt="Angelo Front End Developer logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link href="/services">SERVICES</Nav.Link>
              <Nav.Link href="/portfolio">PORTFOLIO</Nav.Link>
              <Nav.Link href="/about">CONTACT</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
