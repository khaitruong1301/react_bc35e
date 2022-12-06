import axios from 'axios';
import { useFormik } from 'formik'
import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom'

const DemoUseSearchParams = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [arrProduct, setArrProduct] = useState([])
    let keyword = searchParams.get('k');//khi đường dẫn url không có tham số keyword => null
    const frm = useFormik({
        initialValues: {
            keyword: ''
        },
        onSubmit: (values) => { //values.keyword = 'abc'
            console.log(values);
            //Khi người dùng gõ từ khoá và submit => đưa từ khoá lên url
            setSearchParams({
                k: values.keyword
            })
        }
    });
    const getProductByKeyword = async () => {
        if (keyword) { //nếu keyword khác null => call api
            const result = await axios({
                url: `https://shop.cyberlearn.vn/api/Product?keyword=${keyword}`,
                method: 'GET'
            });
            //Sau khi call api dựa vào từ khoá thành công thì setState cho arrProduct
            setArrProduct(result.data.content);
            console.log(result.data.content);
        }
    }
    useEffect(() => {
        //call api
        getProductByKeyword();
    }, [keyword])



    return (
        <div className='container'>
            <h3>Search</h3>
            <form className='form-group' onSubmit={frm.handleSubmit}>
                <p>Nhập vào tên sản phẩm</p>
                <input className='form-control' name='keyword' onChange={frm.handleChange} />
                <button className='m-2 btn btn-success'>Search</button>
            </form>
            <h3 className='m-2'>Kết quả tìm kiếm ({arrProduct.length})</h3>
            <div className='row'>
                {arrProduct.map((item, index) => {
                    return <div className='col-3' key={index}>
                        <div className='card'>
                            <img src={item.image} alt='...' />
                            <div className='card-body'>
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

export default DemoUseSearchParams


