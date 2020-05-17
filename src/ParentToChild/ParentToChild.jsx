import React from 'react'

export class ParentToChildComponent extends React.Component {
  state = {
    age: 10,
    name: 'srinu'
  }
  render() {
    return (
      <div>
        <Child age={this.state.age} name={this.state.name} />
      </div>
    )
  }
}


class Child extends React.Component {
  render() {
    return (<div>
      <SubChild age={this.props.age} name={this.props.name}/>
    </div>)
  }
}


class SubChild extends React.Component {
  render() {
    return (
      <div>
        <p>Name: {this.props.name} </p>
        <p>Age: {this.props.age}</p>
      </div>
    )
  }
}