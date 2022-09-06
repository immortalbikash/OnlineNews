import React, { useState } from 'react'
import Post from '../Data/Post'
import { Link, useParams } from 'react-router-dom'

export default function Category() {

  const { cid } = useParams();
  const displaydata = Post.filter((q) => (q.cat == cid));

  return (
    <div className='container'>
      <div className='row'>

        {
          displaydata.map((e) => (
            <div className='col-lg-4'>
            <img src={e.image} className='w-100'/>
              <p className='py-2'><Link to={`/single/${e.id}`}>{e.title}</Link></p>
            </div>

          ))
        }

      </div>
    </div>
  )
}
