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
                <a classname = "insta" href = {instaLink}><InstagramIcon/></a>
                <section class = "p-postal-code">AREA CODE - 2194</section>
                <section class = "tel"> CALL ME - 071-612-8379</section>
                EMAIL ME - <a class = "e-mail" href = "2109231@students.wats.ac.za"> 2109231@students.wits.ac.za</a>
            </p>
      </div>
    )
  }
}
