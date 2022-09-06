import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Post from '../Data/Post';

export default function Single() {
    //useState garda data dekhayena
    var {pid} = useParams()
    var postd = Post.find((e)=>e.id==pid);
  return (
    <div className='container'>
    <div className='p-5 shadow'>
        <h2 className='text-center'>{postd.title}</h2>
        <img src={postd.image} className='w-100'/>
        <p>{postd.desc}</p>
        </div>
    </div>
  )
}
