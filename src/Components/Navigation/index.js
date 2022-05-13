import React from 'react'
import {Link } from "react-router-dom";


function index() {
  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
        <ul className='d-flex justify-content-center'>
            <li className='mx-5'><Link to="/">Home</Link></li>
            <li><Link to="/post">Post</Link></li>

        </ul>
    </div>
  )
}

export default index