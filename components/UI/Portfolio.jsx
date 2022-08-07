import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import SectionSubtitle from "./SectionSubtitle";
import classes from "../../styles/portfolio.module.css";
import PortfolioItem from "./PortfolioItem";
import portfolioData from "../data/portfolio";

const Portfolio = () => {
  const [filter, setFilter] = useState("Image 1");
  const [data, setData] = useState();

  useEffect(() => {
    if (filter === "Image 1") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
    if (filter === "Image 2") {
      const filteredData = portfolioData.filter(
        (item) => item.category === filter
      );

      setData(filteredData);
    }
  }, [filter]);

  const active = `${classes.tab__btn__active}`;

  return (
    <section id="portfolio">
      <Container>
        <Row>
          {/* 1 */}

          <Col lg="6" md="6" className="mb-5">
            <SectionSubtitle subtitle="Galeri Kami" />
            <h4 className="mt-4">Beberapa galeri kami</h4>
          </Col>

          {/* 2 */}

          <Col lg="6" md="6">
            <div className={`${classes.tab__btns} text-end`}>
              <button
                className={`${
                  filter === "Image 1" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Image 1")}
              >
                Image 1
              </button>
              <button
                className={`${
                  filter === "Image 2" ? active : ""
                } secondary__btn text-white`}
                onClick={() => setFilter("Image 2")}
              >
                Image 2
              </button>
            </div>
          </Col>

          {data?.map((item) => (
            <Col lg="4" md="4" sm="6" key={item.id}>
              <PortfolioItem item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Portfolio;
