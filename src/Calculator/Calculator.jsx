import React from 'react';

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5
  };

  render() {
    const add = this.state.a + this.state.b;
    return (
      <div>
        {'Add : ' + add}
        <br />
        {'Sub : ' + (this.state.a - this.state.b)}
        <br />
        {'Mul : ' + this.state.a * this.state.b}
        <br />
        {'Div: ' + this.state.a / this.state.b}
      </div>
    );
  }
}

export default Calculator;
