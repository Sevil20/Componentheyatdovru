import React, { Component } from 'react'
import './Input.css'
class Input extends Component {
    state = { name: "" , email:"", password:"" , isActive: false,type:'text',show:'show' };
    handleName = (e) => {
        this.setState({name:e.target.value});
    }
    handleEmail = (e) => {
        this.setState({email:e.target.value})
    }
    handlePassword = (e) => {
        this.setState ({password:e.target.value})
    }
    clickHandler1 = (e) =>{
        this.setState({name: e.target.value = ''})
    }
    clickHandler2 = (e) =>{
        this.setState({email: e.target.value = ''})
    }
    clickHandler3 = (e) =>{
        this.setState({password: e.target.value = ''})
    }
    ischeck = (e) =>{
            this.setState({isActive:e.target.value=true});
            this.setState({type: this.state.type === 'text'? 'password':'text'});
            this.setState({show: this.state.show==='hide'?'show':'hide'})
    }
    render() {
        // console.log(this.state)
      return (
       <div style={{display:'flex', flexDirection: 'column'}}>
       <label className='name-label' htmlFor="name">Name:
         <input value={this.state.name} className='name'
            id="name"
            name="name"
            placeholder='name'
            onChange={(e)=>this.handleName(e)}/>
       <button type='button' className='btn' onClick={this.clickHandler1}>X</button></label>
       <br></br>
       <label className='email-label' htmlFor="email">Email:
         <input value={this.state.email} className='email'
            id="name"
            name="email"
            placeholder='email'
            onChange={(e)=>this.handleEmail(e)}/>
      <button type='button' className='btn' onClick={this.clickHandler2}>X</button> </label>
       <br></br>
       <label className='password-label' htmlFor="password">Password:
         <input value={this.state.password} className='password'
            id="name"
            name="password"
            placeholder='password'
            type={this.state.type}
            onChange={(e)=>this.handlePassword(e)}/><button type='button' className='btn' onClick={this.clickHandler3}>X</button>
       </label>
      <p >{this.state.show}<input type="checkbox" checked={this.state.isActive} onChange={this.ischeck}/></p>
       <br></br>
       </div>
    
      );
    }
   }
export default Input