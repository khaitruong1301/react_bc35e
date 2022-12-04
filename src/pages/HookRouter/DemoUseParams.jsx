import React from 'react'
import { useEffect } from 'react';
import { NavLink, useParams } from 'react-router-dom'
import axios from 'axios';
import { useState } from 'react';

const DemoUseParams = () => {

  const [prodDetail, setProdDetail] = useState({});
  const params = useParams();

  console.log(prodDetail);
  const getProductById = async (id) => {
    const result = await axios({
      url: `https://shop.cyberlearn.vn/api/Product/getbyid?id=${id}`,
      method: 'GET'
    });
    //Sau khi lấy dữ liệu từ api về set vào state
    setProdDetail(result.data.content);
  }


  useEffect(() => {
    //call api
    getProductById(params.id)
  }, [])

  return (
    <div className='container'>
      <div className='row mt-3'>
        <div className='col-4'>
          <img className='w-100' src={prodDetail.image} alt='...' />
        </div>
        <div className='col-8'>
          <h3>{prodDetail.name}</h3>
          <p>{prodDetail.description}</p>
        </div>
      </div>
      <h3 className='mt-2 text-center'>Related products</h3>
      <div className='row'>
        {prodDetail.relatedProducts?.map((item, index) => {
          return <div className='col-4' key={index}>
            <div className='card'>
              <img src={item.image} alt='...' />
              <div className='card-body'>
                <h3>{item.name}</h3>
                <p>{item.price}</p>
                <NavLink to={`/detail/${item.id}`} className={"btn btn-success"}>View detail</NavLink>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default DemoUseParams