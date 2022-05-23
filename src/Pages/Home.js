import React, { Component } from 'react';
import "../Style/Home.css";


export default class Home extends Component {
  render() {
    return (
      <body className='home'>
        <main>
          <article>
            <h1 className='homeh1'>franco steyn</h1>
            <p className='homeP'>
                Hello! This is my portfolio site where I will tell you a bit more
                about myself as well as what I can do. This portfolio - like me - is still a work in progress. 
                The <i>ABOUT</i> page will tell you more 
                about me, and will have a link to my LinkedIn profile
                and the <i>WORK</i> page will show and tell you what I have 
                done up until now.
            </p>
            <p className='thanks'>Thank you so much for your time!</p>
            </article>
        </main>
      </body>
    )
  }
}

