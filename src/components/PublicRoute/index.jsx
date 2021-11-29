import React, { Component } from 'react'
import {Route,Redirect} from "react-router-dom"

 class PublicRoute extends Component {
    render() {
        const isAuthenthice=JSON.parse(localStorage.getItem('token'));

        if(!isAuthenthice){
            return <Redirect to='/'/>
        }
        return (
           
                <Route
                exact={this.props.exact}
                component={this.props.component}
                path={this.props.path} 
                />
        );
    }
}

export default PublicRoute
