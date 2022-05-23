import React, { Component } from 'react';
import InstagramIcon from '@mui/icons-material/Instagram';
import "../Style/Footer.css";

let instaLink = "https://www.instagram.com/francohayes_photography/";

export default class Footer extends Component {
  render() {
    return (
      <div className='footer'>
            <p class = "h-card">
                <section class = "p-name">&copy; 2022 Franco Steyn</section>
                <a classname = "insta" href = {instaLink} target="_blank"><InstagramIcon/></a>
                <section class = "p-postal-code">Area Code - 2194</section>
                <section class = "email">E-mail me - francohsteyn@gmail.com</section>
            </p>
      </div>
    )
  }
}
