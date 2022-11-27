import axios from 'axios'
import React, { useState } from 'react'
import { useEffect } from 'react'

const DemoCategory = () => {
    const [arrCategory, setArrCategory] = useState([]);
    const [arrProduct, setArrProduct] = useState([]);
    const [categoryId,setCategoryId] = useState(null);

    
    const getAllCategoryApi = async () => {
        const result = await axios({
            url: 'https://shop.cyberlearn.vn/api/Product/getAllCategory',
            method: 'GET'
        });
        //Sau khi lấy dữ liệu từ api về thì setState cho arrCategory
        setArrCategory(result.data.content);
    }
    useEffect(() => {
        //Gọi api load danh mục 
        getAllCategoryApi();
        return () => {
            console.log('componentWillUnmount');
            /* 
                callback mà các useEffect return sẽ thực thi khi
                + component mất khỏi react dom (ví dụ chuyển hướng trang hoặc if else ... )
             */
        }
    }, [])

    const getProductByCategoryId = async (id) => {
        const result = await axios({
            url: `https://shop.cyberlearn.vn/api/Product/getProductByCategory?categoryId=${id}`,
            method: 'GET'
        });
        
        setArrProduct(result.data.content);
    }
    useEffect(()=>{
        if(categoryId) { //nếu categoryId khác null => chạy
            //callapi
            getProductByCategoryId(categoryId);
            //Tương tự componentDidUpdate có if bên reactClassComponent (Khi tham số dependency thay đổi thì hàm này mới chạy)
            //=> Sử dụng khi cần thực thi 1 logic nào đó bởi 1 state thay đổi (tham số dependency) 
        }
        return () => {
            console.log('componentWillUnmount');
            /* 
                callback mà các useEffect return sẽ thực thi mỗi khi dependency thay đổi giá trị
             */
        }
    },[categoryId])

    console.log('arrResult', arrCategory)
    return (
        <div className='mt-5'>
            <div className='d-flex px-5'>
                <div className='w-25'>
                    <h3>Product Category</h3>
                    <nav className='d-flex flex-column '>
                        {arrCategory.map((item, index) => {
                            return <a className='mt-2 nav-link' href='#' key={index} onClick={() => {
                                setCategoryId(item.id)
                            }}>{item.category}</a>
                        })}
                    </nav>
                </div>
                <div className='w-75'>
                    <h3>Product list</h3>
                    <div className='row'>
                        {arrProduct.map((prod, index) => {
                            return <div className='col-4 mt-2' key={index}>
                                <div className='card'>
                                    <img src={prod.image} alt='...' />
                                    <div className='card-body'>
                                        <h3>{prod.name}</h3>
                                        <p>{prod.price} $</p>
                                        <button className='btn btn-danger'>
                                            <i className='fa fa-cart-plus'></i>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default DemoCategory