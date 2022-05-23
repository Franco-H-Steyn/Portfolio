import React, { Component } from 'react';
import "../Style/About.css";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Icon from '../Images/MainIcon.jpg';
import InstagramIcon from '@mui/icons-material/Instagram';


let linkedLink = "https://www.linkedin.com/in/franco-steyn-b4b386188/";
let instaLink = "https://www.instagram.com/francohayes_photography/";

export default class Blogs extends Component {
  render() {
    return (

        
        <body className='about'>
            <main>
        <h1>about</h1>
            
        <article>
            <h2>More About Me</h2>
            <img src={Icon}/>
            <p className='text'>
                Hello! My name is Franco Steyn and I have been studying at the University of Witwatersrand since 
                2019. I am in my fourth year of a professional degree in Digital Arts (NQF level 8) with a double major in Writing and 
                Interactivity, as well as Interactive Media (which focuses on UX, UI and general interactivity). 
                I especially enjoy designing websites that are easy on the eyes and is simple and fun to use or navigate 
                through. I enjoy learning new skills and new ways to solve problems. My major in Writing and Interactivity 
                has helped me realize my love for storytelling - which I've noticed help with designing websites and 
                interactive media in general (they always have a narrative). I am also an amateur photographer 
                (feel free to look at my instagram link at the bottom of the page) and I enjoy pottery as well as 
                anything creative or artistic. If you are interested in working 
                with me - please feel free to contact me on LinkedIn or via email.
                <br/>
                <br/>
                <center>
                    {<a classname = "LinkedIn" href = {linkedLink} target="_blank"><LinkedInIcon/></a>}
                    {<a classname = "insta" href = {instaLink} target="_blank"><InstagramIcon/></a>}
                </center>
            </p>
        </article>
            </main>
        </body>
    )
  }
}
