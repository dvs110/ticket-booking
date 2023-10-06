import React from 'react'
import { useNavigate } from 'react-router-dom'
// import { providerData } from '../data'
import axios from "axios"
const CategoriesCard = ({ logo, work, provider, id }) => {
  const storedData = localStorage.getItem('myData');
  const s = JSON.parse(storedData);
  const navigate = useNavigate();
  const clickHandle = async () => {

    console.log(work);
    let obj = { work: work }
    const res = await axios.post("http://localhost:8080/findbyservice", obj)
    console.log(res.data);
    let providerData = res.data
    navigate('/service', {
      state: {
        myData: providerData,
        work: work,

      }
    })

  }

  const clickHandle1 = async () => {

    navigate('/login')

  }
  return (
    <div className='md:px-12 px-2 md:py-10 py-5'>

      {s ? <div className='bg-white border  border-black drop-shadow-xl shadow-slate-200 shadow-xl md:w-[350px] w-[300px] md:h-[150px] h-[100px] rounded-lg flex items-center cursor-pointer hover:scale-y-125' onClick={clickHandle}>

        <div className='border-none  w-24  mx-6 p-2  '>
          <img src={logo} alt="" />

        </div>
        <div className='text-black  w-[50%]  text-center'>
          <p className='text-2xl font-extrabold' id={`getCat${id}`}>{work}</p>
        </div>
      </div> : <><div className='bg-white border  border-black drop-shadow-xl shadow-slate-200 shadow-xl md:w-[350px] w-[300px] md:h-[150px] h-[100px] rounded-lg flex items-center cursor-pointer hover:scale-y-125' onClick={clickHandle1}>

        <div className='border-none  w-24  mx-6 p-2  '>
          <img src={logo} alt="" />

        </div>
        <div className='text-black  w-[50%]  text-center'>
          <p className='text-2xl font-extrabold' id={`getCat${id}`}>{work}</p>
        </div>
      </div></>}
    </div>
  )
}

export default CategoriesCard