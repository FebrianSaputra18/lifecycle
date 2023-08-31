import React, { Component } from "react";
import ViewContent from "../component/ui/ViewContent";

let url =
  "https://newsapi.org/v2/top-headlines?" +
  //   'q=war&' +
  "country=us&" +
  "from=2023-06-17&" +
  "sortBy=popularity&" +
  "apiKey=17e29e9b710b441fb21743756d8d4fc9";

export default class Data extends Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  async componentDidMount(query) {
    let currentUrl = url;
    console.log(query, '<<===');
    if(query !== ''){
        currentUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=17e29e9b710b441fb21743756d8d4fc9`;
    }
    return (await fetch(currentUrl)).json();
  }
  render() {
    const { DataisLoaded} = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Pleses wait some time.... </h1>{" "}
        </div>
      );
    return <ViewContent {...DataisLoaded} />
  }
}
