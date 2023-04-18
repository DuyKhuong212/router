import React from 'react'
import { posts } from './Post';
import { Link } from 'react-router-dom';
import './postList.css'
const PostList = () => {
    return (
        <div className='content'>
        <h1>Danh sách bài viết</h1>
        <div>
        <ul>
            {posts.map(post => (
                <div className='postLink' key={post.id}>
                    <Link to = {`/blogs/topic-1/${post.id}`} >{post.title}</Link>
                </div>
            ))}
        </ul>
        </div>
        </div>
      );
}

export default PostList