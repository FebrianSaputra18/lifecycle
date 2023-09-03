import React, { useEffect, useState } from "react";
import { Button, Card, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function FetchFunc() {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://newsapi.org/v2/everything?q=russia&apiKey=17e29e9b710b441fb21743756d8d4fc9"
        );
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
        console.log(jsonData);
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchSearch = async () => {
      try {
        const response = await fetch(
          `https://newsapi.org/v2/everything?q=${search}&apiKey=17e29e9b710b441fb21743756d8d4fc9`
        ) 
        if (response.ok){
          const result = await response.json();
          setData(result)
        }
      } catch (error) {
        console.error("Error fetching data", error);
        setLoading(false);
      }
    };

    if (search !== "") {
      fetchSearch();

      setTimeout(() =>{
        setLoading(false)
      }, 1000)
    }
  }, [search]);

  return (
    <div>
      <Form className="d-flex">
        <Form.Control
          type="search"
          placeholder="Search.."
          className="me-2"
          aria-label="Search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </Form>
      {loading ? (
        <p>Loading data ..</p>
      ) : (
        <Row>
          {data.articles.map((item, index) => {
            return (
              <Card
                style={{
                  margin: "15px",
                  width: "15rem",
                  height: "auto",
                }}
                key={index}
              >
                <Card.Img variant="top" src={item.urlToImage} />
                <Card.Body>
                  <Card.Title>{item.title}</Card.Title>
                  <p style={{ color: "#858383" }}>{item.author}</p>
                  <p style={{ color: "#858383" }}>{item.publishedAt}</p>
                  <Card.Text>{item.content}</Card.Text>
                </Card.Body>
                <Link
                  key={item.id}
                  style={{ paddingBottom: "15px" }}
                  to={item.url}
                >
                  <Button variant="primary">Read more</Button>
                </Link>
              </Card>
            );
          })}
        </Row>
      )}
    </div>
  );
}
