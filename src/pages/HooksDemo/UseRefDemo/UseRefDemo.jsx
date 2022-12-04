//rface
import React, { useRef, useState } from 'react'
import BaiTapGioHang from '../../BaiTapGioHang/BaiTapGioHang';
const UseRefDemo = () => {
    const [number,setNumber] = useState(1);
    const commentRef = useRef(''); 
    const inputRef = useRef(null);
    const comGioHang = useRef(null);
    // const [comment, setComment] = useState('');
    console.log('render');
    const handleChange = (e) => {
        // setComment(e.target.value);
        commentRef.current = e.target.value;
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(commentRef.current);
        //documet.getElementById('idComment').style.background = '
        inputRef.current.style.background = 'green';
        // console.log(comGioHang.current.xoaGioHang(3));
    }
    return (
        <div className='container'>
            <button className='btn btn-success' onClick={()=> {
                setNumber(number + 1);
            }}>+</button>
            <div className='card'>
                <div className='card-header'>
                    <div className='comment p-2 m-2' style={{ background: '#EEE' }} >
                        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias, cum earum ipsam doloremque, magni aspernatur, fuga molestias tenetur autem veritatis ipsa? Minima alias similique voluptatem eos, rerum sit quas ad.
                    </div>
                </div>
                <div className='card-body'>
                    <form onSubmit={handleSubmit}>
                        <input ref={inputRef} className='form-control' name="comment" onChange={handleChange} />
                        <button className='btn btn-success mt-2' type='submit'>Send</button>
                    </form>
                </div>
            </div>

            {/* <BaiTapGioHang ref={comGioHang} /> */}
        </div>
    )
}

export default UseRefDemo
//medium (1.1.1.1)

//tips javascript, best practice javascript