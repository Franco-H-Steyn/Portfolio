import React, { Component } from 'react';
import "../Style/Blogs.css";
import { Bloglist } from '../Helpers/BlogPosts';
import BlogItem from "../Components/BlogItem";

export default class Blogs extends Component {
  render() {
    return (
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
    )
  }
}
