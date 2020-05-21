
import React from 'react'

export class EvenOrOdd extends React.Component {
  state = {
    no: undefined,
    show: false
  }
  onNumberChange = (event) => {
    this.setState({
      no: event.target.value
    })
  }

  evenOrOdd = () => {
    if (this.state.no === undefined) {
      return ""
    }
    if (this.state.no % 2 === 0) {
      return "Even";
    }
    else {
      return "Odd";
    }
  }

  showOutput = () => {
    this.setState(
      { show: true }
    )
  }

  hideOutput = () => {
    this.setState(
      { show: false }
    )
  }

  render() {
    console.log(this.state.no)
    return (
      <div>
        <input type="number" onChange={this.onNumberChange} onBlur={this.showOutput} onFocus={this.hideOutput}/>

        {this.state.show && <p>{this.evenOrOdd()}</p>}
      </div>
    )
  }
}
