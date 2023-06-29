import React from 'react'
import BlogLoop from '../blog-loop/BlogLoop.component'

const BlogSection = () => {
  return (
    <div className='m-5'>
      <h3>OUR BLOGS</h3>
      <hr/>
      <div className='row'>
        <BlogLoop/>
      </div>
    </div>
  )
}

export default BlogSection