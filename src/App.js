import "./App.css";
import axios from "axios";
import Container from "./Container";
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    axios
      .get(
        "http://api.exchangeratesapi.io/latest?access_key=07a4d14afa22553e702d83a16634b27f"
      )
      .then((response) => {
        this.setState({ data: response.data.rates });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
        <br />
        <div className="row widthTitle">
          <div
            className="column ui segment "
            style={{ backgroundColor: "black", color: "grey" }}
          >
            <p className="widthHeader">Yet Another Forex</p>
          </div>
        </div>
        <div className="widthItem">
          <h2 className="column">Today's Rates</h2>
          {/*ui four column doubling   ui stackable four column grid*/}
          <div className="ui stackable doubling four column grid ">
            {Object.keys(this.state.data).map((key) => {
              return (
                <div className="column">
                  <Container
                    key={key}
                    keys={key}
                    value={this.state.data[key]}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </>
    );
  }
}

export default App;
