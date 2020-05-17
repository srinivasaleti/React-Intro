import React from 'react'

export class SiblingCommunicationDemo extends React.Component {

  state = {}

  getData = (name, age) => {
    this.setState({
      name: name,
      age: age
    })
  }

  render() {
    return (
      <div>
        <Child1 onChange={this.getData}/>
        <br />
        <Child2 name={this.state.name} age={this.state.age}/>
      </div>
    )
  }
}


class Child1 extends React.Component {
  state = {
    age: 20,
    name: 'Srinu'
  }

  onClickListener = () => {
   this.props.onChange(this.state.name, this.state.age)
  }

  render() {
    return (
      <div>
        Child1
        <button onClick={this.onClickListener}>Send Data</button>
      </div>
    )
  }
}

class Child2 extends React.Component {
  render() {
    return (
      <div>
        Child2
        <p>Name: {this.props.name} </p>
        <p>Age: {this.props.age} </p>
      </div>
    )
  }
}