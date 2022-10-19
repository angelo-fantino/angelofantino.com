import Image from "next/image";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import projects_weather01 from "../public/projects_weather01.png";
import projects_weather02 from "../public/projects_weather02.png";
import projects_weather03 from "../public/projects_weather03.png";
import styles from "../styles/pages/_portfolio.module.scss";

function Project01(props) {
  return (
    <>
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        dialogClassName={styles.modalWidth}
        centered
      >
        <Modal.Header closeButton></Modal.Header>
        <Carousel fade className={styles.projectImg}>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={projects_weather01}
              alt="First slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={projects_weather02}
              alt="Second slide"
            />
          </Carousel.Item>

          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={projects_weather03}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Modal>
    </>
  );
}

export default Project01;
