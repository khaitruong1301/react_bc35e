//rafce
import React, { useState } from 'react'

const UseStateDemo = () => {

    const [number, setNumber] = useState(10);
    const [fontSize,setFontSize] = useState(26);
    //this.state = {like:1};
    const [state, setState] = useState({
        like: 1,
        number: 1
    })

    console.log(state);

    return (
        <div className='container'>
            <h3>Demo use state</h3>
            <h3>Number: {number}</h3>
            <button className='btn btn-success mx-2' onClick={() => {
                setNumber(number + 1);
            }}>+</button>
            <button className='btn btn-success mx-2' onClick={() => {
                setNumber(number - 2);
            }}>-</button>
            <hr />
            <h3>Like: {state.like}</h3>
            <button className='btn btn-danger mx-2' onClick={() => {
                setState({
                    ...state,
                    like: state.like + 1
                })
            }}>
                <i className='fa fa-heart'></i>
            </button>
            <hr />
            <h3>Tăng giảm fontSize</h3>
            <p style={{fontSize:fontSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate, dolorum!</p>
            <button className='btn btn-success mx-2' onClick={()=>{
                setFontSize(fontSize + 1);
            }}>+</button>
            <button className='btn btn-success mx-2' onClick={()=>{
                setFontSize(fontSize - 1);

            }}>-</button>
        </div>
    )

}

export default UseStateDemo