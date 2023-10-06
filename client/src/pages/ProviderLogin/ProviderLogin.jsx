import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Footer, Header } from '../../components'
const ProviderLogin = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const onChangeHandle = (e) => {
    setData({ ...data, [e.target.name]: [e.target.value] })

  }
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:8080/carrers/login-worker";
      const res = await axios.post(url, data);
      if (res.data === 1)
        window.location = "/";
      else if (res.data === 0)
        setError("Incorrect email");
      else if (res.data === -1)
        setError("Incorrect password");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  }
  return (
    <>
      <Header />
      <div className='w-full box-border px-10 border pb-20 min-h-[100vh] bg-[#f5f5f5] flex items-center justify-center'>
        <div className='border md:w-[900px] md:h-[500px] flex shadow-md  drop-shadow-xl  rounded-lg'>
          <div className='flex-2 flex flex-col items-center justify-center bg-white rounded-t-lg rounded-b-lg'>
            <form action="" className='flex flex-col items-center m-8' onSubmit={handleSubmit}>
              <h1 className='md:mb-6  my-4 text-black text-2xl text-extrabold self-center'>Login to Your Account</h1>
              <input type="email" name="email" placeholder='Email' value={data.email} onChange={onChangeHandle}
                required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' />
              <input type="password" name="password" placeholder='Password' value={data.password} onChange={onChangeHandle}
                required className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' />
              {error && <div className={styles.error_msg}>{error}</div>}
              <button type="submit" className=' border-none outline-none md:p-2 p-1 bg-[#3bb19b] decoration-white m-3 rounded-xl w-32 md:text-3 '>
                Sign In
              </button>
              <Link to='/register' className=' md:hidden outline-none px-8 border bg-white rounded-xl  w-32  text-blue-400 '>Sign up</Link>


            </form>
          </div>
          <div className='hidden  md:flex md:flex-1 md:flex-col md:items-center md:justify-center bg-[#3bb19b] rounded-r-lg'>
            <h1 className='mx-0 my-5 text-white text-bold self-center text-5xl'>New Here ?</h1>
            <Link to='/register'> <button className='border-none outline-none p-2 bg-white rounded-xl w-36  text-black '>Sign up</button></Link>

          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProviderLogin