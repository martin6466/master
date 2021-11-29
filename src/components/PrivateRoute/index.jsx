import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom"

 class PrivateRoute extends Component {
    render() {
        const isAuthenthic=JSON.parse(localStorage.getItem('token'));

        if(!isAuthenthic){
            return <Redirect to='/login'/>
        }
        return (
            <div>
                <Route exact={this.props.exact} component={this.props.component} path={this.props.path}/>
            </div>
        )
    }
}

export default PrivateRoute
