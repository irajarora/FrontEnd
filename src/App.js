import logo from "./logo.svg";
import Nav from "./components/nav";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./components/home";
import Login from "./components/login";
import Posts from "./components/posts";
import {Route, Redirect, Switch} from "react-router-dom";
import PageNotFound from "./components/pagenotfound";
import Register from "./components/register";
import Engineer from "./components/engineer";
import Complaint from "./components/complaint";

function App() {
  return (
    <div className="App">
      <Nav />
      <Switch>
        {/* <Route path="/employees" component={}/> */}
        {/* <Route path="/employee/update/:id" component={}/>
        <Route path="/employee/add" component={}/>
        <Route path="/employees" component={}/> */}
        <Route path="/posts" component={Posts}/>
        <Route path="/login" component={Login}/>
        <Route path="/engineer" component={Engineer}/>
        <Route path="/complaint" component={Complaint}/>
        <Route path="/register" component={Register}/>
        <Route exact path="/" component={Home}/>
        <Redirect from="/home" to="/"/>
        <Route component={PageNotFound}/>
      </Switch>
      
      
      {/* <Home />
      <Login />
      <Posts/> */}
    </div>
  );
}

export default App;
