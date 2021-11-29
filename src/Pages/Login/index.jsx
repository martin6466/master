import React, { Component } from 'react'
import Input from '../../components/Input';
import Button from '../../components/Button';
import { history } from '../../BrowserHistory';
import {users} from '../../constants'




export class Login extends Component {

constructor(){
    super();
   this.handleChange= this.handleChange.bind(this);
   this.handleClick= this.handleClick.bind(this);

}

    state={
        name:"",
        password:""
}
handleChange(e){
    const {value,name}=e.target;
    this.setState({
        [name]:value
    })
}


handleClick(e){
    e.preventDefault();

    const { name , password}= this.state;

    const foundedUser = users.find((user)=>user.name===name )
    
    
    if(foundedUser){
        localStorage.setItem('token','true')
        history.push('/')
        return
    }
localStorage.setItem('token','false')

};



    render() {
        
        return (
            <div>
                <h1>Login</h1>
                <form>
                    <Input handleChange={this.handleChange} placeholder="name" name="name"/>
                    <Input handleChange={this.handleChange} placeholder="password" password="password"/>
                    <Button handleClick={this.handleClick} title="Login"/>

                    
                </form>

            </div>
        )
    }
}

export default Login
