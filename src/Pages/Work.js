import React, { Component } from 'react'
import "../Style/Work.css";


export default class Wireframe extends Component {
  render() {
    return (
        <body className='work'>
            <main>
            <h1>my work</h1>
            <article>
            <p>
                This page contains a list of links to previous websites that I have made. Please note that I have made these in university as assignments, 
                thus there are theory blogposts in the websites since they were assignment requirements. My React site is subject to change since 
                I am still editing the website for varsity.
            </p>
            <h2>See My Progress!</h2>
            </article>
            <ul>
                <li> <a href = "https://2109231frank.github.io/WSOA3028A_2109231/index.html" target="_blank">2021 first site</a></li>
                <li> <a href = "https://2109231frank.github.io/WSOA3029A_2109231/index.html" target="_blank">2021 final exam</a></li>
                <li> <a href = "https://2109231frank.github.io/WSOA4175A_2109231/#/" target="_blank">2022 React site</a></li>
            </ul>
        
           
            </main>
        </body>
    )
  }
}
