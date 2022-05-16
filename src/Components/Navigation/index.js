import React, { useContext } from 'react'
import {Link } from "react-router-dom";
import { DataCreateContext } from '../../App';


function Index() {
  const info = useContext(DataCreateContext);
console.log(info);

  return (
    <div className='shadow-lg p-3 mb-5 bg-body rounded'>
        <ul className='d-flex justify-content-center'>
            <li className='mx-2 nav'><Link to="/">Home</Link></li>
            <li className='mx-2 nav'><Link to="/post">Post</Link></li>
            <li className='mx-2 nav'><Link to="/custom-hook">Custom Hook</Link></li>
            <li className='mx-2 nav'>{info}</li>
        </ul>
    </div>
  )
}

export default Index