import React from "react";
import { Container, Row, Col } from "reactstrap";
import Link from "next/link";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/contact.module.css";
import Form from "./Form";

const Contact = () => {
  return (
    <section id="contact" className={`${classes.contact}`}>
      <Container>
        <Row>
          {/* 1 */}
          <Col lg="6" md="6">
            <SectionSubtitle subtitle="Contact Me" />
            <h3 className="mt-4 mb-4">Contact with me</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              atque nihil ab deserunt asperiores quam maiores dolor, cumque illo
              beatae quasi, earum fugiat natus itaque perferendis debitis animi
              omnis facilis?
            </p>

            <ul className={`${classes.contact__info__list}`}>
              <li className={`${classes.info__item}`}>
                <span>
                  <a
                    href="https://goo.gl/maps/QV8PmA7wp8vEprdJ9"
                    target={"blank"}
                  >
                    <i className="ri-map-pin-line"></i>
                  </a>
                </span>
                <p>Bogor - Leuwiliang</p>
              </li>

              <li className={`${classes.info__item}`}>
                <span>
                  <a href="mailto:nizamcellular0508@gmail.com" target={"blank"}>
                    <i className="ri-mail-line"></i>
                  </a>
                </span>
                <p>nizamcellular0508@gmail.com</p>
              </li>
              <li className={`${classes.info__item}`}>
                <span>
                  <a href="https://wa.me/6283109130784" target={"blank"}>
                    <i className="ri-phone-line"></i>
                  </a>
                </span>
                <p>+62 81386090709</p>
              </li>
            </ul>

            {/* Social Media */}
            <div className={`${classes.social__links}`}>
              <Link href="#">
                <i className="ri-facebook-fill"></i>
              </Link>
              <Link href="#">
                <i className="ri-instagram-line"></i>
              </Link>
              <Link href="#">
                <i className="ri-whatsapp-line"></i>
              </Link>
            </div>
          </Col>
          {/* 2 */}
          <Col lg="6" md="6">
            <Form />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
