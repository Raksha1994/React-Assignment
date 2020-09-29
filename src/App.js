import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


import Homescreen from './components/Homescreen';
import Login from './components/LoginComponent/Login';


function App() {
return (
<Router>
<div className="App">
<Switch>
<Route path="/" exact component={Login}></Route>
<Route path="/Homescreen" component={Homescreen}></Route>

</Switch>
</div>
</Router>
);
}



export default App;