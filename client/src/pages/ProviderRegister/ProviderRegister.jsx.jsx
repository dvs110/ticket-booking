import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { Footer, Header } from '../../components'
// import data from '../data'
const ProviderRegister = () => {
  const [photo, setphoto] = useState("");
  const [data, setData] = useState({
    firstName: "",
    seats: "",
    phone: "",
    city: "",
    date: "",
    time: "",
    amount: "",

  })
  const [error, setError] = useState("")
  const navigate = useNavigate();
  const onChangeHandle = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  console.log(data);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {

      const d = new FormData();
      d.append("file", photo);
      d.append("upload_preset", "upload")
      d.append("cloud_name", "dwc7aty0x")
      const uploadRes = await axios.post("https://api.cloudinary.com/v1_1/dwc7aty0x/image/upload", d)
      console.log(uploadRes.data);
      const { url } = uploadRes.data;
      let dat = {
        ...data,
        photo: url
      }

      const res = await axios.post("http://localhost:8080/carrers/signup-worker", dat);
      if (res.data === 1)
        navigate('/');
      else (res.data === 0)
      setError("Invalid Credentials or user exists with same email")



      console.log(res.message);
    }
    catch (err) {
      if (err.response && err.response.status >= 400 && err.response.status <= 500) {
        setError(err.response.data.message)
      }
    }
  }
  // const [display,setDisplay]=useState(true);
  // const showCustomer=()=>{
  //     setDisplay(true);
  // }
  // const showProvider=()=>{
  //     setDisplay(false)
  // }

  return (
    <>
      <Header />
      <div className="w-full  min-h-[100vh]  md:pt-0 pb-20 pt-20 md:pb-0 my-10  flex items-center justify-center">
        <div className=" md:w-[900px] md:min-h-[100px] flex shadow-md  drop-shadow-xl  rounded-lg ">
          <div className="hidden md:flex md:flex-2 md:flex-col px-3 md:items-center md:justify-center bg-[#3bb19b] rounded-l-lg ">
            <h1 className='m-6 text-white text-5xl self-center text-center'>Welcome Back</h1>

          </div>
          <div className="flex-1  flex  flex-col justify-center bg-white rounded-t-lg rounded-b-lg">
            <form action="" onSubmit={handleSubmit} className="flex  flex-col items-center mx-10">
              <h1 className='md:mb-6 my-4 text-black md:text-5xl text-3xl'>Create Bus</h1>

              <div className='flex'>
                < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text"
                  required
                  onChange={onChangeHandle}
                  name="firstName" value={data.firstName} placeholder='Name' />
                < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="number" name="phone"
                  required
                  onChange={onChangeHandle}
                  value={data.phone} placeholder='Bus number' />
              </div>
              <div className='flex'>
                < input className='rounded-lg text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text"
                  required
                  onChange={onChangeHandle}
                  name="date" value={data.date} placeholder='Date' />
                < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="text" name="time"
                  required
                  onChange={onChangeHandle}
                  value={data.time} placeholder='Time' />
              </div>

              <div className="flex">


                {/* className="leading-5 py-3 px-2 border-none outline-none rounded-md  my-3 border-black" */}
                <select className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' name="work" id="profession" placeholder='Profession' onChange={onChangeHandle} value={data.work} >

                  <option value="Delhi">Delhi</option>
                  <option value="Hyderabad">Hyderabad</option>

                  <option value="Pune">Pune</option>
                  <option value="Mumbai">Mumbai</option>

                  <option value="Srinagar">Srinagar</option>
                  <option value="Rishikesh">Rishikesh</option>


                </select>

                <input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="number" name="amount"
                  required
                  onChange={onChangeHandle}
                  value={data.amount} placeholder='Price' />
              </div>
              <div className="flex">
                <input type="file" id="img" name="img" onChange={(e) => setphoto(e.target.files[0])} accept="image/*" className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' />

                < input className='rounded-lg  text-black bg-[#edf5f3] mx-[5px] outline-none border-none m-2 w-60 md:w-80 md:p-3.5 p-2 text-[14px]' type="number" name="seats"
                  required
                  onChange={onChangeHandle}
                  value={data.seats} placeholder='Total Seats' />

              </div>



              {error && <div className='w-96 p-6 text-sm  text-center  rounded-sm text-[#f34646] bg-white mx-2'>{error}</div>}
              <button type="submit" className=' border-none outline-none md:p-2 p-1.5 bg-[#3bb19b] decoration-white mx-2 md:m-3 my-3 rounded-xl md:w-36 w-28 text-3 font-semibold'>Create</button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default ProviderRegister