import React from 'react'

export class ChildToParentDemo extends React.Component {

  state = {
  }

  getData = (name, age) => {
    this.setState({
      age: age,
      name: name
   })
  }

  render() {
    return (
      <div>
        <p>Name: {this.state.name} </p>
        <p>Age: {this.state.age} </p>
        <Child onChange={this.getData} />
      </div>
    )
  }
}


class Child extends React.Component {
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
        <button onClick={this.onClickListener}>Send Data</button>
      </div>
    )
  }
}

