import React, { Component } from "react";
import "./App.css";
class App extends Component {
  constructor() {
    super();
    this.state = {
      name: "Calculator",
      number: "",
    };
  }
  handleClick(value) {
    this.setState({ number: this.state.number + value });
  }
  setNumber() {
    try {
      this.setState({ number: eval(this.state.number) });
    } catch (error) {
      console.log(error);
    }
  }
  setClear(){
    this.setState({number:""})
  }

  render() {
    console.log(this.state.number);

    return (
      <div className="box">
        <div className="first">
          <input type="text" placeholder="0" value={this.state.number}></input>
        </div>
        <div className="second">
          <button onClick={() => this.handleClick("7")}>7</button>
          <button onClick={() => this.handleClick("8")}>8</button>
          <button onClick={() => this.handleClick("9")}>9</button>
          <button onClick={() => this.handleClick("+")}>+</button>
        </div>
        <div className="second">
          <button onClick={() => this.handleClick("4")}>4</button>
          <button onClick={() => this.handleClick("5")}>5</button>
          <button onClick={() => this.handleClick("6")}>6</button>
          <button onClick={() => this.handleClick("-")}>-</button>
        </div>
        <div className="second">
          <button onClick={() => this.handleClick("1")}>1</button>
          <button onClick={() => this.handleClick("2")}>2</button>
          <button onClick={() => this.handleClick("3")}>3</button>
          <button onClick={() => this.handleClick("*")}>*</button>
        </div>
        <div className="second">
          <button onClick={() => this.handleClick("0")}>0</button>
          <button onClick={() => this.handleClick(".")}>.</button>
          <button onClick={() => this.setNumber()}> =</button>
          <button onClick={() => this.handleClick("/")}>/</button>
        </div>
        <div className="second">
          <button onClick={() => this.setClear("c")}>c</button>
        </div>
      </div>
    );
  }
}
export default App;
