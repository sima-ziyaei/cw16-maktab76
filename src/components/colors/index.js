import React, { Component } from "react";
import randomColor from "randomcolor";
import "./index.css";

class Colors extends Component {
  state = {
    bgColor: [],
  };

  setColor = () => {
    console.log(this.state.bgColor);
    let color = randomColor();
    this.setState({
      bgColor: [...this.state.bgColor, { color, id: Math.random() }],
    });
  };

  render() {
    return (
      <main>
        <button
          onClick={() => {
            this.setColor();
          }}
        >
          add color
        </button>
        <div>
          {this.state.bgColor.map(({ color, id }) => (
            <div
              key={id}
              className="colorsArea"
              style={{ backgroundColor: color }}
            >
              {color}
            </div>
          ))}
        </div>
      </main>
    );
  }
}

export default Colors;
