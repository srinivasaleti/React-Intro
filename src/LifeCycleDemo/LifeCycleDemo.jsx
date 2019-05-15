import React from 'react';

class LifeCycleDemo extends React.Component {
  constructor(props) {
    super(props);
    console.log('Constructor');
  }
  state = {
    a: 0
  };
  componentWillMount = () => {
    console.log('Component Will mount');
  };

  componentDidMount = () => {
    console.log('Component Did Mount');
  };

  shouldComponentUpdate = () => {
    console.log('Should Component Update');
    return true;
  };

  componentWillUpdate = () => {
    console.log('Component Will Update');
  };

  componentDidUpdate = () => {
    console.log('Component Did update');
  };

  changeState = e => {
    this.setState({
      a: this.state.a + 10
    });
  };

  render() {
    console.log('render');
    return (
      <div>
        LifeCycleDemo
        <button onClick={this.changeState}>Change State</button>
        {this.state.a}
      </div>
    );
  }
}

export default LifeCycleDemo;
