import React, { useState } from 'react'
import { posts } from './Post';
import { useParams, useNavigate } from 'react-router-dom';
import './postDetail.css'

const PostDetails = () => {
  const navigate = useNavigate();

const handleClickBack = () => {
    navigate(-1);
}

const handleClickPush = () => {
  navigate('/form', {state:{id:id}});
}

    const { id } = useParams();
    const post = posts.find(p => p.id === Number(id));
    if (!post) {
      return <div className='content' style={{color:'red'}}>Không tìm thấy bài viết</div>;
    }

    return (
      <div className='content'>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <button onClick={handleClickPush} type='button' children='Push'/>
        <button onClick={handleClickBack} type='button' children='Back'/>
      </div>
    );
}

export default PostDetails