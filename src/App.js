import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Nyhetslista from "./components/Nyhetslista";
import data from "./fuskdata";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [
        {
          urlToImage: "https://source.unsplash.com/random/400x250/?cat",
          title: "testing news articles",
          description: " sighso hsdogh sos"
        },
        {
          urlToImage: "https://source.unsplash.com/random/400x250/?cat",
          title: "testing news articles no 2",
          description: " second sighso hsdogh sos"
        }
      ]
    };
  }

  componentDidMount() {
    fetch(
      "https://newsapi.org/v2/top-headlines?country=se&apiKey=97e7e70c41f143e09f96cf9eb8f0e45e"
    )
      .then(function(response) {
        //do something
        return response.json();
      })
      .then(jsondata => {
        // do something with data
        this.setState({ articles: jsondata.articles });
      })
      .catch(error => {
        this.setState({
          articles: [
            {
              urlToImage: "fake.jpg",
              title: "something is wrong",
              description: " we will return soon"
            }
          ]
        });
      });
  }
  render() {
    return <Nyhetslista minArtiklar={this.state.articles} />;
  }
}

export default App;
