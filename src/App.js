import React, {component} from "react";
import "./Style/App.css";
import Navbar from "./Components/NavBar";
import {Route, Switch} from "react-router-dom";
import Home from "./Pages/Home";
import Blogs from "./Pages/Blogs";
import Footer from "./Components/Footer";
import blog1 from "./Pages/blogs/blog1";
import blog2 from "./Pages/blogs/blog2";
import blog3 from "./Pages/blogs/blog3";
import blog4 from "./Pages/blogs/blog4";
import Particles from "./Components/Background";
import Wireframe from "./Pages/Wireframe";

function App()
{

    
    return(
        <div className="App">
       

        <Navbar/>
        <Switch>
            <Route exact path = "/" component = {Home}/>
            <Route exact path = "/Blogs" component = {Blogs}/>
                    <Route exact path = "/blogs/blog1" component = {blog1}/>
                    <Route exact path = "/blogs/blog2" component = {blog2}/>
                    <Route exact path = "/blogs/blog3" component = {blog3}/>
                    <Route exact path = "/blogs/blog4" component = {blog4}/>
            <Route exact path = "/Wireframe" component = {Wireframe}/>
        </Switch>
        <Footer/>
        <div className="plswork">
        <Particles/>
        </div>
        </div>
    );
    
}
export default App;

