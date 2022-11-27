//rafce
import React, { useState, useEffect } from 'react'
import axios from 'axios';

const UseEffectDemo = () => {

    const [number, setNumber] = useState(1);
    const [arrProduct, setArrProduct] = useState([]);
    console.log('render')
    useEffect(() => {
        //Trường hợp 1: không có tham số dependency, luôn thực thi sau mỗi lần component render => ít sử dụng
        console.log('thực thi sau khi render');
    })

    const getAllProduct = async () => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product',
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ api đưa vào state của arrProduct
        setArrProduct(result.data.content);
    }
    useEffect(() => {
        //Trường hợp 2: có tham số thứ 2 là dependency [], chỉ thực thi 1 lần duy nhất sau lần render đầu tiên của component (Giống componentDidMount) => thường dùng để call các api getAll ...
        console.log('didMount');
        getAllProduct();
    }, []);



    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-success' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <hr />
            <h3>Product list</h3>
            <div className='row'>
                {arrProduct.map((prod,index) => {
                    return <div className='col-4 mt-2' key={index}>
                        <div className='card'>
                            <img src={prod.image} alt="..." />
                        </div>
                    </div>
                })}
            </div>

        </div>
    )
}

export default UseEffectDemo