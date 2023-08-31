import React, { Component } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class FetchData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchValue: '',
    }
  }

  fetchNewsData = async () => {
    const { searchValue } = this.state

    try {
      const response = await fetch(`https://newsapi.org/v2/everything?q=${searchValue}&apiKey=17e29e9b710b441fb21743756d8d4fc9`);
      const data = await response.json();

      this.setState({ 
        data: data.articles, 
      });
    } catch (error) {
      console.error('Error fetching articles : ', error);
    }
  }

  async componentDidMount() {
    let url =
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=17e29e9b710b441fb21743756d8d4fc9";

    try {
      const response = await fetch(url);
      const data = await response.json();
      this.setState({ data: data.articles });
    } catch (err) {
      console.log(err);
    }
    
  }
  componentWillUnmount() {
    //ini buat request
  }

  componentDidUpdate(nextProps, nextState) {
    if (nextState.searchValue !== this.state.searchValue) {

      this.fetchNewsData()
    }
  }

  handleSearchChange = (e) => {
    this.setState({
      searchValue: e.target.value
    })
  }

  //contoh

  // const handleSearch = () => {
  //   onSearch(value)
  // }

  // const handleInputChange = (event) => {
  //   setValue(event.target.value)
  // }

  render() {
    console.log("lanjut render");

    const { data, searchValue } = this.state;
    console.log(data);
    return (
      <>
        <Form className="d-flex">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2"
            aria-label="Search"
            value={searchValue}
            onChange={this.handleSearchChange}
          />
        </Form>
        {data.map((item, index) => {
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
      </>
    );
  }
}
