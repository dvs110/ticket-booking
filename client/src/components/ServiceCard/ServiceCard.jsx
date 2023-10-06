import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai';
import { FaCheck } from 'react-icons/fa'
import { AiFillStar } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';

const ServiceCard = (props) => {
  const navigate = useNavigate();
  const bookingHandle = () => {
    console.log(props);

    navigate('/booking', {
      state: {

        name: props.name,
        work: props.work,
        location: props.location,
        price: props.price,
        phone: props.phone,
        seats: props.seats,
        date: props.date,
        time: props.time,
      }
    })
  }

  return (

    <div className='md:px-12 px-2 md:py-10 py-5'>
      <div className='bg-white  drop-shadow-xl shadow-slate-200 shadow-xl md:w-[350px] min-w-[300px] min-h-[150px] rounded-3xl flex flex-col items-center '>


        <div className='z-10  w-full text-black flex  justify-between px-5 py-5'>
          <div className='flex flex-col'>
            {/* <p className='text-white changeColor text-center text-2xl uppercase'>{props.name}</p> */}

          </div>
        </div>

        {/* middle section  */}
        <div className='mx-12 z-30'>
          {/* <h1 className='text-xl uppercase px-5 py-3 font-textFont font-extrabold   break-words text-bannerText'>{props.work}</h1> */}
          <p className='text-xl px-5 py-3 text-center font-textFont font-extrabold   break-words text-bannerText'>Bus Name: {props.name}</p>
          <img src={props.imgUrl} className='rounded-3xl' alt="" />
        </div>
        <div className='text-black  text-center  w-[250px]'>
          {/* <h1 className='text-xl uppercase px-5 py-3 font-textFont font-extrabold   break-words text-bannerText'>{props.work}</h1> */}

          <h1 className='text-xl uppercase px-1 py-3 font-textFont    break-words text-bannerText self-center'>  Dehradun  to  {props.work}</h1>

          <div className='flex justify-between  h-[100px] items-center'>
            <div className="first">


              <p className='text-xl px-1 py-3 text-center font-textFont    break-words text-bannerText'>Price: {props.price}</p>
            </div>
            <div className="second">
              <p className='text-xl px-5 py-3 text-center font-textFont    break-words text-bannerText'>Bus Bumber: {props.phone}</p>

            </div>
            <div className="third">
              {props.seats <= 0 ? <p className='text-xl px-1 py-3 text-center font-textFont    break-words text-bannerText'>Seats Left: 0</p> : <p className='text-xl px-1 py-3 text-center font-textFont    break-words text-bannerText'>Seats Left: {props.seats}</p>}
            </div>
          </div>


          <div className='flex justify-between  h-[100px] items-center'>
            <div className="first">
              <p className='text-xl px-5 py-3 text-center font-textFont   break-words text-bannerText'>Time: {props.time}</p>
            </div>
            <div className="second">
              <p className='text-xl px-3 py-3 text-center font-textFont    break-words text-bannerText'>Date: {props.date}</p>
            </div>

          </div>



        </div>
        <div className=' w-full flex justify-center'>

          {props.seats <= 0 ? <button className='bg-[#fdfd96] w-[50%]  rounded-lg my-6 py-2 border cursor-pointer' disabled>Not Available</button> : <button className='bg-btnColor w-[50%]  rounded-lg my-6 py-2 border' onClick={bookingHandle}>Book</button>}
        </div>

      </div>
    </div>
  )
}

export default ServiceCard 