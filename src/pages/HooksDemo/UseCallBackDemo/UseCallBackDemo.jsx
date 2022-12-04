//rafce
import React from 'react'
import { useCallback } from 'react';
import { useState } from 'react'
import Comment from './Comment';
const UseCallBackDemo = () => {
    const [like, setLike] = useState(1);
    const [number,setNumber] = useState(1);
    
    const renderLike = () => {
        return `Bạn đã like ${like}` ;
    }
    const callBackRenderLike = useCallback(renderLike,[like])
    return (
        <div className='container'>
            <h3>Number: {number}</h3>
            <button className='btn btn-success' onClick={()=>{
                setNumber(number+1);
            }}>+</button>

            <h3>Like: {like}</h3>
            <button className='btn btn-danger' onClick={() => {
                setLike(like + 1);
            }}>
                <i className='fa fa-heart'></i>
            </button>

            <Comment like={like} renderLike={callBackRenderLike} />

        </div>
    )
}

export default UseCallBackDemo