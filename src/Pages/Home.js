import React from 'react'
import Post from "../Data/Post"
import { Routes, Route, Link } from "react-router-dom";
import "../App.css";

export default function Home() {
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12 py-3'>
                        <img src={require("../img/4.gif")} />
                    </div>
                </div>

                <div className='row'>
                    <div className='col-lg-12 py-3 shadow p-3 text-center'>
                        {Post.slice(0, 3).map((p) => (
                            <div>
                                <h1 className='py-3'>
                                    <Link className='link-danger text-decoration-none' to={`single/${p.id}`}>
                                        {p.title}
                                    </Link>
                                </h1>
                                <img src={p.image} className="w-100" />
                            </div>

                        ))}


                    </div>
                </div>

                <div className='row py-3'>
                    <div className='col-lg-9'>
                        <h3 className='py-3 text-center'>मुख्य </h3>
                        <div className='row bg-light py-3'>
                            {Post.slice(0, 1).map((a) => (
                                <div className='col-lg-6'>
                                    <img src={a.image} className='w-100' />
                                    <p><Link to={`/single/${a.id}`} className='link-danger text-decoration-none'>{a.title}</Link></p>
                                </div>
                            ))}

                            <div className='col-lg-6'>
                                <ul className="list-group">
                                    {Post.slice(1, 6).map((a) => (
                                        <li className="list-group-item">
                                            <Link to={`single/${a.id}`} className='link-danger'>{a.title}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                    </div>
                    <div className='col-lg-3'>
                        <img src='https://bankingkhabar.com/wp-content/uploads/2021/11/business-sansar_banking-khabar_300X160px.gif' className='w-100' />
                        <img src='https://bankingkhabar.com/wp-content/uploads/2022/09/300x300.gif' className='w-100 my-2' />
                    </div>


                </div>

                <div className='row'>
                    <div className='col-lg-12 py-3'>
                        <img src='https://bankingkhabar.com/wp-content/uploads/2022/07/Size-Main-1-1110x113.512.gif' className='w-100' />
                    </div>
                </div>

                <div className='bg-dark py-4 text-light ps-4'>
                    <h3>विशेष </h3>
                    <div className='row'>
                    {Post.slice(0,3).map((a) => (
                                <div className='col-lg-4'>
                                    <img src={a.image} className='w-100' />
                                    <p><Link to={`/single/${a.id}`} className='link-danger text-decoration-none'>{a.title}</Link></p>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </>
    )
}
