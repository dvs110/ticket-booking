import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Footer, Header } from '../../components'
// import data from '../data'
const Register = () => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: ""
  })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const onChangeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/signup-user";
      const res = await axios.post(url, data);
      const datar = {
        email: res.data.email,
        firstName: res.data.firstName,
        lastName: res.data.lastName,
        isAdmin: res.data.isAdmin
      }
      localStorage.setItem('myData', JSON.stringify(datar));

      // console.log(res);
      if (res.data != 0) {
        navigate('/');
      }
      else if (res.data == 0) {
        setError("User already exist")
      }


      // navigate('/login');
      // console.log(res.message);
    }
    catch (err) {
      // if (err.response && err.response.status >= 400 && err.response.status <= 500) {
      //   setError(err.response.data.message)
      // }
    }
  }
  const [display, setDisplay] = useState(true);
  const showCustomer = () => {
    setDisplay(true);
  }
  const showProvider = () => {
    setDisplay(false)
  }

  return (
    <>
      <Header />
      <div className="w-full  min-h-[100vh] max-h-[100vh] md:pt-0 pb-20 pt-20 md:pb-0  flex items-center justify-center">
        <div className=" md:w-[900px] md:h-[500px] flex shadow-md  drop-shadow-xl  rounded-lg">
          <div className="hidden md:flex md:flex-2 md:flex-col px-3 md:items-center md:justify-center bg-[#3bb19b] rounded-l-lg ">
            <h1 className='m-6 text-white text-5xl self-center'>Welcome Back</h1>
            <Link to='/login'>
              <button className='border-none outline-none p-2 bg-white rounded-xl w-36  text-black font-bold'>Sign In</button>
            </Link>
          </div>
          <div className="flex-1  flex  flex-col justify-center bg-white rounded-t-lg rounded-b-lg">
            <form action="" onSubmit={handleSubmit} className="flex  flex-col items-center mx-10">
              <h1 className='md:mb-6 my-4 text-black md:text-5xl text-3xl'>Create Account</h1>
              <div>
                {/* {display? <Customer/>:<Provider/>} */}
                {/* <p className='text-black'>Hello</p> */}
              </div>
              {/* <div className='border w-full flex mt-5 justify-between rounded-full'>
           <button className="border-r-[#f5f5f5] outline-none text-black border w-[50%] rounded-l-full " onClick={showCustomer}>Customer</button>
            <button className="border-l-[#f5f5f5] outline-none text-black border self-end w-[50%] rounded-r-full" onClick={showProvider}>Provider</button>
           </div> */}
              < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text"
                required
                onChange={onChangeHandle}
                name="firstName" value={data.firstName} placeholder='First Name' />
              < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text"
                required
                onChange={onChangeHandle}
                name="lastName" value={data.lastName} placeholder='Last Name' />
              < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="email"
                required
                onChange={onChangeHandle}
                name="email" value={data.email} placeholder='Email' />
              < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="password" name="password"
                required
                onChange={onChangeHandle}
                value={data.password} placeholder='Password' />




              {error && <div className='w-96 p-2 text-sm  text-center  rounded-sm bg-white text-[#f34646] mx-2'>{error}</div>}
              <button type="submit" className=' border-none outline-none md:p-2 p-1.5 bg-[#3bb19b] decoration-white mx-2 md:m-3 my-3 rounded-xl md:w-36 w-28 text-3 font-semibold'>Sign Up</button>
              <Link to='/login' className=' md:hidden outline-none px-10 border-none bg-white rounded-xl w-36  text-blue-400 font-bold mb-4'>Sign in</Link>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Register