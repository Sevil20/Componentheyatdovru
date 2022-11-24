
import React, { Component } from 'react'

 class Api
 extends Component {
    state = {
        users: [],
        dispatch: action =>{
            this.setState(state => reducer(state, action))
        }
    }
    componentDidMount = async () =>{
   const response1 =   await fetch(`https://acb-api.algoritmika.org/api/transaction/`)
   .then(response => response.json())
   .then(data => {
    console.log(data)
    this.setState({
        users: data
    })
   })
}
  render() {
    return (
      <div>
      <p> {this.props.children}</p>
      </div>
    )
  }
}
export default Api