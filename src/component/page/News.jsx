import React from "react";
import { Col, Container} from "react-bootstrap";
import FetchFunc from "../ui/FetchFunc";
// import FetchData from "../ui/FetchData";

const News = () => {
  return (
    <Container>
      <h1>Watch and learn!</h1>
      <Col sm={12} lg={12} >
          <FetchFunc />
      </Col>
    </Container>
  );
};

export default News;
