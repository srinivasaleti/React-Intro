import React from 'react';
import axios from 'axios';

export class GetAPIDemo extends React.Component {

  state = {

  }

  getData = () => {
    //1) Api Call through axios
    //API, AXIOS
    //API == https://jsonplaceholder.typicode.com/todos/1


    axios.get('https://jsonplaceholder.typicode.com/todos/1')
      .then((response) => {
        // handle success
        this.setState({
          data: response.data
        })
      })
      .catch((error) => {
        // handle error
        console.log(error);
      })
    //2) State
    //3) Display
  };

  render() {

    return (
      <div>
        Get Api Demo
        {
          this.state.data && <div>
            <p>User ID : {this.state.data.userId}</p>
            <p>Title: {this.state.data.title}</p>
          </div>
        }

        <button onClick={this.getData}>Click Me</button>
      </div>
    )
  }
}