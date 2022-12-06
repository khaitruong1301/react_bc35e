import axios from 'axios';
import React from 'react'
import { NavLink } from 'react-router-dom';

import useFetch from '../../hooks/useFetch';

const Home = () => {

  const { data, error, loading } = useFetch('https://shop.cyberlearn.vn/api/Product');

  console.log('data', data);
  return (
    <div className='container'>
      <div className='loading' style={{display:loading ? 'flex' : 'none'}}>
          <span className='display-4'>Loading ...</span>
      </div>
      <h3>Product list</h3>
      <div className='row'>
        {data?.content.map((item, index) => {
          return <div className='col-4 mt-2' key={index}>
            <div className='card'>
              <img src={item.image} alt="..." />
              <div className="card-body">
                <p>{item.name}</p>
                <p>{item.price}</p>
                <NavLink to={`/detail/${item.id}`} className="btn btn-success">View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Home