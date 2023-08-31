import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import FetchData from "../ui/FetchData";

const News = () => {
  return (
    <Container>
      <h1>Watch and learn!</h1>
      <Col sm={12} lg={12} >
        <Row>
          <FetchData />
        </Row>
      </Col>
    </Container>
  );
};

export default News;
