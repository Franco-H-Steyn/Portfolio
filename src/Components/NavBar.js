import React, { Component } from 'react';
import Logo from "../Images/Logo.jpg";
import {Link} from "react-router-dom";
import "../Style/NavBar.css";
import MenuIcon from '@mui/icons-material/Menu';

export default class Navbar extends Component{
    constructor(props)
    {
        super(props);
        this.state={
            showLinks: false
        };
        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav()
    {
        this.setState(changeState => ({
            showLinks: !changeState.showLinks
        }));
    }

    render()
    {
        return(
            <div className='navbar'>
                <div className='Left' id = {this.state.showLinks ? "open" : "close"}>
                    <img src={Logo}/>
                        <div className='hiddenLinks'>
                            <Link to = "/" onClick={this.toggleNav}>HOME</Link>
                            <Link to = "/Blogs" onClick={this.toggleNav}>BLOGS</Link>
                            <Link to = "/Wireframe" onClick={this.toggleNav}>WIREFRAME</Link>
                        </div>
                </div>

                <div className='Right'>
                    <Link to = "/">HOME</Link>
                    <Link to = "/Blogs">BLOGS</Link>
                    <Link to = "/Wireframe">WIREFRAME</Link>
                    <button onClick = {this.toggleNav}><MenuIcon/></button>
                </div>
            </div>
        )
    }
}