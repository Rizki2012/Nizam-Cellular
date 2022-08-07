import React from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/services.module.css";
import ServicesItem from "./ServicesItem";

const Services = () => {
  return (
    <section id="services">
      <Container>
        <Row>
          {/* 1 */}
          <Col lg="6" md="6">
            <div className={`${classes.services__container}`}>
              <div>
                <ServicesItem
                  title="Software Android Dan Iphone"
                  icon={"ri-lock-unlock-fill"}
                />
                <ServicesItem
                  title="Hardware Android Dan Iphone"
                  icon={"ri-service-line"}
                />
              </div>
              <div>
                <ServicesItem
                  title="Windows 7 - 11 Pro"
                  icon={"ri-windows-fill"}
                />
              </div>
            </div>
          </Col>

          {/* 2 */}
          <Col lg="6" md="6" className={`${classes.service__title}`}>
            <SectionSubtitle subtitle="Layanan Kami" />
            <h3 className="mb-0 mt-4">
              Software, Hardware Dan instalasi windows
            </h3>
            <h3 className="mb-4">Pengalaman Lebih Baik 🤖 </h3>
            <p>
              Nizam cellular leuwiliang melayani software, hardware, instalasi
              windows dan aplikasi 🙂
            </p>

            {/* Scroll To Top */}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Services;
