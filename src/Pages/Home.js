import React, { Component } from 'react';
import "../Style/Home.css";
import "../Style/Blogs.css";
import { Bloglist } from '../Helpers/BlogPosts';
import BlogItem from "../Components/BlogItem";

export default class Home extends Component {
  render() {
    return (
    <div className='bigpage'>
      <div className='Home'>
        <div className='HeaderContainer'>
            <h1 className='homeh1'>FRANCO HAYES PHOTOGRAPHY</h1>
            <p className='homeP'>
                This is where I like to talk about things I find interesting (see blogs page), 
                as well as share some of my photographs and writing pieces (coming soon).
            </p>
        </div>
      </div>

      <div className='Blogs'>
      <h1>INTERACTIVE MEDIA BLOGS</h1>
          <div className='bloglist'>
              {Bloglist.map((blogItem, value) => {
                  return(
                      <BlogItem
                      value = {value}
                      title = {blogItem.title}
                      intro = {blogItem.intro}
                      link = {blogItem.link}
                      />
                  )
              })}
          </div>
      </div>
    </div>
    )
  }
}

