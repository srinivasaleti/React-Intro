import React from 'react';

class Calculator extends React.Component {
  state = {
    a: 10,
    b: 5
  };

  setA = e => {
    this.setState({
      a: parseInt(e.target.value)
    });
  };

  setB = e => {
    this.setState({
      b: parseInt(e.target.value)
    });
  };

  render() {
    const add = this.state.a + this.state.b;
    return (
      <div>
        <input className='inputA' onChange={this.setA} />
        <input onChange={this.setB} />
        <br />
        {'A:' + this.state.a + ' B: ' + this.state.b}
        <br />
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
