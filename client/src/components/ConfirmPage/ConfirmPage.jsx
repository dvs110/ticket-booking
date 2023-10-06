import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import axios from "axios"
const ConfirmPage = () => {

     const location = useLocation()
     const navigate = useNavigate();


     const confirmHandle = async () => {
          const storedData = localStorage.getItem('myData');
          const s = JSON.parse(storedData);

          console.log(s);
          let data = {
               name: location.state.pdata.pname,
               work: location.state.pdata.work,
               number: location.state.pdata.phone,
               price: location.state.pdata.price,
               time: location.state.pdata.time,
               date: location.state.pdata.date,
               email: s.email,
               custname: s.firstName,
               custlname: s.lastName,
               seat: location.state.seat
          }
          // console.log(data);
          navigate("/")
          localStorage.setItem('myData1', JSON.stringify(data));
          let res = await axios.put("http://localhost:8080/book-worker", data)


     }

     return (
          <div className='text-black w-full min-h-[100vh] flex justify-center items-center'>
               <div className='w-[70%] min-h-[500px] py-5   rounded-lg'>
                    <div className='py-5'>
                         <h1 className='text-center text-5xl font-bold pb-8'>Confirm Details</h1>
                         <div className="flex justify-evenly">
                              <div className="provider shadow-xl w-[45%] ">
                                   <div className=' grid grid-cols-3 justify-center'>
                                        <div className="py-5 name text-center">
                                             <span className='text-bannerText font-extrabold'>Bus Name: </span>
                                             <p>{location.state.pdata.pname}</p>
                                        </div>

                                        <div className="py-5 work text-center">
                                             <span className='text-bannerText font-extrabold'>Destination: </span>
                                             <p>{location.state.pdata.work}</p>
                                        </div>
                                        <div className="py-5 price text-center">
                                             <span className='text-bannerText font-extrabold'>Total Price: </span>
                                             <p>{location.state.pdata.price}</p>
                                        </div>


                                        <div className=" py-5 phone text-center">
                                             <span className='text-bannerText font-extrabold'>Date: </span>
                                             <p>{location.state.pdata.date}</p>
                                        </div>
                                        <div className=" py-5 phone text-center">
                                             <span className='text-bannerText font-extrabold'>Time Slot: </span>
                                             <p>{location.state.pdata.time}</p>
                                        </div>
                                        <div className=" py-5 phone text-center">
                                             <span className='text-bannerText font-extrabold'>Seats Booked: </span>
                                             <p>{location.state.seat}</p>
                                        </div>
                                   </div>
                              </div>

                         </div>
                    </div>
                    <div className='flex justify-center'>
                         <button className='text-center text-white rounded-lg bg-bannerText px-4 py-2 self-center' onClick={confirmHandle}>Book</button>
                    </div>
               </div>
          </div>
     )
}

export default ConfirmPage