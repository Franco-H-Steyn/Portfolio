import React, { Component } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../Style/Footer.css";

let instaLink = "https://www.instagram.com/francohayes_photography/";
let linkedLink = "https://www.linkedin.com/in/franco-steyn-b4b386188/";

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
            <p class = "h-card">
                <section class = "p-name">&copy; 2022 Franco Steyn</section>
                <a classname = "insta" href = {instaLink} target="_blank"><InstagramIcon/></a>
                <section class = "p-postal-code">Area Code - 2194</section>
                <section class = "LinkedIn">Please contact me via -<a classname = "LinkedIn" href = {linkedLink} target="_blank">LinkedIn</a></section>
                <section class = "email">Email me - francohsteyn@gmail.com</section>
            </p>
      </div>
    )
  }
}
