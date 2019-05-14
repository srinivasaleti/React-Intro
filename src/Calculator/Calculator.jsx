import React from 'react';

class Calculator extends React.Component {
  state = {
    a: 0,
    b: 0,
    showResult: false
  };

  setA = e => {
    this.setState({
      a: parseInt(e.target.value),
      showResult: false
    });
  };

  setB = e => {
    this.setState({
      b: parseInt(e.target.value),
      showResult: false
    });
  };

  setShowResultToTrue = e => {
    this.setState({
      showResult: true
    });
  };

  render() {
    const add = this.state.a + this.state.b;
    return (
      <div>
        <input className='inputA' onChange={this.setA} />
        <input onChange={this.setB} />
        <button onClick={this.setShowResultToTrue}>Result</button>

        {this.state.showResult ? (
          <div>
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
        ) : (
          <div>Click On Result button</div>
        )}
      </div>
    );
  }
}

export default Calculator;
