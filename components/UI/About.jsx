import React from "react";
import { Container, Row, Col } from "reactstrap";
import classes from "../../styles/about.module.css";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import Image from "next/image";
import Deden from "../../public/images/Deden.jpg";
import Hilman from "../../public/images/Hilman.jpg";
import Ate from "../../public/images/Ate.jpg";
import Didi from "../../public/images/Didi.jpg";
import Rizki from "../../public/images/Rizki.jpg";

const About = () => {
  return (
    <section id="about">
      <Container>
        <Row>
          {/* 1 */}
          <Col lg="6" className={`${classes.about__content}`}>
            <SectionSubtitle subtitle="Tentang Kami" />
            <h3 className="mt-4">Layanan Terbaik Kualitas Terbaik</h3>
            <h3 className="mb-4">
              Nizam Cellular Berusaha Memberikan Layanan Service Terbaik.
            </h3>
            <p>
              Nizam Cellular Menjual Aksesoris Handphone Android Maupun I Phone
              , Nizam Cellular Juga Menjual Pulsa Dan Voucher
            </p>

            <div className="d-flex align-items-center gap-5">
              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-shield-keyhole-fill"></i>
                  </span>
                  Software
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-service-fill"></i>
                  </span>
                  Hardware
                </h6>
              </div>

              <div>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-pulse-line"></i>
                  </span>
                  Pulsa Dan Voucher
                </h6>
                <h6 className="d-flex align-items-center gap-2 mt-3 fw-normal">
                  <span className={`${classes.about__icon}`}>
                    <i className="ri-smartphone-fill"></i>
                  </span>
                  Softace Android Dan Iphone
                </h6>
              </div>
            </div>

            <div className="mt-5">
              <button className="primary__btn">
                <Link href={"#portfolio"}>Galeri kami</Link>
              </button>

              <button className="secondary__btn">
                <Link href={"#contact"}>Hubungi kami</Link>
              </button>
            </div>
          </Col>

          {/* 2 */}
          <Col lg="6">
            <div
              className={`${classes.about__img__gallery} d-flex gap-4 justify-content-end`}
            >
              <div className="d-flex flex-column mb-3">
                {/* Img 1 */}
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={Deden} alt="About-img" />
                </div>
                {/* Img 2 */}
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={Hilman} alt="About-img" />
                </div>
                {/* Img 3 */}
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={Ate} alt="About-img" />
                </div>
              </div>

              {/* Column 2 */}

              <div className="d-flex flex-column mb-3">
                {/* Img 6 */}
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={Rizki} alt="About-img" />
                </div>
                {/* Img 5 */}
                <div
                  className={`${classes.about__img} ${classes.about__img__box}`}
                >
                  <Image src={Didi} alt="About-img" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
