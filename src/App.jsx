import React,{Component} from "react"
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Header from "./components/Header/index";

import { Router,Route,Switch,Redirect} from 'react-router-dom'
import { history } from "./BrowserHistory";
import PrivateRoute from "./components/PrivateRoute";
import PublicRoute from "./components/PublicRoute";



class App extends Component{
render(){
    return(
  <Router history={history}>
  <Header/>
  <Switch>
  <PrivateRoute exact path="/" component={Home}/>
  <PrivateRoute exact path="/products" component={Products}/>
  <PublicRoute exact path="/login" component={Login}/>
  <Redirect from="*" to="/login"/>
  </Switch>  
  </Router>
 
      

  
      
      
    
     
        
    )
}
}
export default App;