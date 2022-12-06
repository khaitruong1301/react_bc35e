import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import {useFormik} from 'formik'
import * as yup from 'yup'
import useRoute from '../../hooks/useRoute';
const DemoUseNavigate = () => {
    //useNavigate: dùng để chuyển hướng trang sau 1 xử lý
    // const navigate = useNavigate();

    const {params,navigate} = useRoute()

    const frmLogin = useFormik({
        initialValues:{
            email:'',
            password:''
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email cannot be blank!').email('email is invalid!'),
            password: yup.string().required('password cannot be blank!')
            // password: yup.string().required('password cannot be blank!').min(6,'tên lỗi').max(32,'tên lỗi').test('regex','tên lỗi')
        }),
        onSubmit: (values) => {
            console.log(values);
            if(values.email === 'cybersoft@gmail.com' && values.password == 'cybersoft'){
                navigate('/bt-game')
            }else {
                alert('email/password incorect !')
            }
        }
    })

    // frmLogin.setFieldValue('userName','abc');
    // console.log('abc');
    // antd form ()
    
    return (
        <form className='container' onSubmit={frmLogin.handleSubmit}>
            <h3>Login</h3>
            <div className='form-group'>
                <p>email</p>
                <input className='form-control' name="email" onChange={frmLogin.handleChange} />
                {frmLogin.errors.email && <div className='alert alert-danger'>{frmLogin.errors.email}</div>}
            </div>
            <div className='form-group'>
                <p>password</p>
                <input className='form-control' name="password" onChange={frmLogin.handleChange}  />
                {frmLogin.errors.password && <div className='alert alert-danger'>{frmLogin.errors.password}</div>}
            </div>
            <div className='form-group'>
                <button type='submit' className='btn btn-success'>Login</button>
            </div>

        </form>
    )
}

export default DemoUseNavigate



 // const [userLogin, setUserLogin] = useState({
    //     username: '',
    //     password: ''
    // });
    // //useNavigate của react routerdom dùng để chuyển hướng trang sau 1 xử lý
    // const navigate = useNavigate() 
    // console.log(userLogin)

    // const handleChange = (e) => {
    //     const {value,name} = e.target;
    //     setUserLogin({
    //         ...userLogin,
    //         [name]:value
    //     })
    // }

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     if(userLogin.username == 'cybersoft' && userLogin.password == 'cybersoft') {
    //         //Chuyển hướng
    //         navigate('/bt-game');
    //     }else {
    //         alert('tài khoản mật khẩu không đúng');
    //     }
    // }