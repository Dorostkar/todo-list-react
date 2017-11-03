import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
      items: []
    };
  }
  onChange = event => {
    this.setState({ term: event.target.value });
  };
  onSubmit = event => {
    event.preventDefault(); //stop the form from submitting.
    this.setState({
      term: "", // term ro khali mikonim
      items: [...this.state.items, this.state.term] //this.state.item state ghablio dare, pas
      //...this.state.items kole araye ghablio copy mikone, hamchenin ba this.state.term terme ghabli ke meghdar dare ro
      //save mikonim
    });
  };
  render() {
    return (
      <div className="App">
        <form onSubmit={this.onSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Add ToDo</button>
        </form>
        <List items={this.state.items} />
      </div>
    );
  }
}

export default App;
