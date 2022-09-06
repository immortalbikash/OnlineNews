import React from 'react'
import Cat from "../Data/Cat";
import { Routes, Route, Link } from "react-router-dom";
import Category from '../Pages/Category';
import Single from '../Pages/Single';
import Home from '../Pages/Home';
import Search from '../Pages/Search';

export default function Header() {
  return (
    <>
      <header className='container'>
        <div className='row'>
          <div className='col-lg-12 py-3'>
            <img src={require("../img/1.gif")} className="w-100"/>
          </div>
          <div className='col-lg-4'>
          <Link to={`/`}>
            <img src={require("../img/3.jpg")} className="w-100"   />
            </Link>
          </div>
          <div className='col-lg-8'>
            <img src={require("../img/2.gif")} className="w-100" />
          </div>
        </div>

      </header>

      <nav>
        <ul>
          <li>
          {Cat.map((category)=>(
            <Link to={`/cat/${category.id}`}>{category.catName}</Link>
          ))}
          </li>
          
          <li>
            <Link to={`/search`}>Search</Link>
          </li>
        </ul>
      </nav>


      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cat/:cid" element={<Category />} />
        <Route path="/single/:pid" element={<Single />} />
        <Route path="/search" element={<Search />} />
        
      </Routes>




    </>
  )
}
