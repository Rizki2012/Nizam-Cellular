import React from "react";
import SectionSubtitle from "./SectionSubtitle";
import { Container, Row, Col } from "reactstrap";
import Image from "next/image";
import Link from "next/link";
import HeroImg from "../../public/images/hero.png";
import classes from "../../styles/hero.module.css";

const Hero = () => {
  return (
    <section className={`${classes.hero}`}>
      <Container>
        <Row>
          {/* Hero Content */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__content}`}>
              <SectionSubtitle subtitle="Selamat Datang" />
              <h2 className="mt-3 mb-3">
                Di Website Nizam Cellular Leuwiliang
              </h2>
              <h5 className="mb-4">Software & Services </h5>
              <p>
                Nizam Cellular Leuwiliang Menerima Service, Menjual Aksesoris
                Iphone, Menjual Aksesoris Android, Menjual Pulsa Dan Voucher
              </p>
              <div className="mt-5">
                <button className="primary__btn">
                  <Link href={"https://wa.me/6283109130784"}>
                    Whatsapp Kami
                  </Link>
                </button>

                <button className="secondary__btn">
                  <Link href={"#about"}>Tentang kami</Link>
                </button>
              </div>
            </div>
          </Col>

          {/* Hero Img */}
          <Col lg="6" md="6">
            <div className={`${classes.hero__img} text-end`}>
              <Image
                alt="Hero-image"
                src={HeroImg}
                width={"400"}
                height={"400"}
              />
              {/* 1 */}
              <div className={`${classes.hero__skills}`}>
                <h6>Software</h6>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
                <span>
                  <i className="ri-bar-chart-line"></i>
                </span>
              </div>
              {/* 2 */}
              <div
                className={`${classes.hero__experience} d-flex align-items-center gap-3`}
              >
                <span>
                  <i className="ri-service-line"></i>
                </span>
                <div className="bg-transparent">
                  <h6>Hardware</h6>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Hero;
