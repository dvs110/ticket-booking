import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const Ticket = () => {

    const location = useLocation()
    const [formData, setFormData] = useState({});

    const p = location.state.myData;

    return (
        <div className='text-black w-full min-h-[100vh] flex justify-center items-center'>
            <div className='w-[70%] min-h-[500px] py-5   rounded-lg'>
                <div className='py-5'>
                    <h1 className='text-center text-5xl font-bold pb-8'>Ticket</h1>
                    <div className="flex justify-evenly">
                        <div className="provider shadow-xl w-[45%] ">
                            <div className=' grid grid-cols-3 justify-center'>
                                <div className="py-5 name text-center">
                                    <span className='text-bannerText font-extrabold'>Passenger Name: </span>
                                    <p>{p.firstName} {p.lastName}</p>
                                </div>
                                <div className="py-5 name text-center">
                                    <span className='text-bannerText font-extrabold'>Bus Name: </span>
                                    <p>{p.busname}</p>
                                </div>

                                <div className="py-5 work text-center">
                                    <span className='text-bannerText font-extrabold'>Destination: </span>
                                    <p>{p.destination}</p>
                                </div>
                                <div className="py-5 price text-center">
                                    <span className='text-bannerText font-extrabold'>Total Price: </span>
                                    <p>{p.totalprice}</p>
                                </div>


                                <div className=" py-5 phone text-center">
                                    <span className='text-bannerText font-extrabold'>Date: </span>
                                    <p>{p.date}</p>
                                </div>
                                <div className=" py-5 phone text-center">
                                    <span className='text-bannerText font-extrabold'>Time: </span>
                                    <p>{p.time}</p>
                                </div>
                                <div className=" py-5 phone text-center">
                                    <span className='text-bannerText font-extrabold'>Seats Booked: </span>
                                    <p>{p.seats}</p>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}

export default Ticket