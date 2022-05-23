import React, {component} from "react";
import "./Style/App.css";
import Navbar from "./Components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Footer from "./Components/Footer";
import Particles from "./Components/Background";
import Work from "./Pages/Work";

function App()
{

    
    return(
        <div className="App">
       

        <Navbar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/About" component = {About}/>
            <Route exact path = "/Work" component = {Work}/>
        </Switch>
        
        <div className="plswork">
        <Particles/>
        </div>
        <Footer/>
        </div>
    );
    
}
export default App;

