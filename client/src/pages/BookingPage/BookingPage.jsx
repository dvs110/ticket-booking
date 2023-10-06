import React from 'react'
import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom'
// import { TimeSlot } from '../../components';

const BookingPage = () => {
    const location = useLocation();
    const [show, setShow] = useState(false)
    const navigate = useNavigate();
    const showTimeHandle = () => {
        navigate('/custBookingDetail', {
            state: {
                pname: location.state.name,
                work: location.state.work,
                price: location.state.price,
                phone: location.state.phone,
                date: location.state.date,
                time: location.state.time,
                totalseats: location.state.seats
            }
        })
    }

    return (
        <div className='text-black w-full min-h-[100vh] flex justify-center items-center '>
            <div className='w-[70%] h-[500px]  border border-green-700 rounded-lg bg-blue-100'>
                <div className='py-5'>
                    <h1 className='text-center text-5xl font-bold pb-4'>Details</h1>
                    <div className='border grid grid-cols-3 justify-center'>
                        <div className="py-5 name text-center">
                            <span className='text-bannerText font-extrabold'>Name: </span>
                            <span>{location.state.name}</span>
                        </div>
                        <div className="py-5 location text-center">
                            <span className='text-bannerText font-extrabold'>Location: </span>
                            <span>{location.state.work}</span>
                        </div>

                        <div className="py-5 price text-center">
                            <span className='text-bannerText font-extrabold'>Price: </span>
                            <span>{location.state.price}</span>
                        </div>

                        <div className=" py-5 phone text-center">
                            <span className='text-bannerText font-extrabold'>Bus Number: </span>
                            <span>{location.state.phone}</span>
                        </div>
                        <div className=" py-5 phone text-center">
                            <span className='text-bannerText font-extrabold'>Date: </span>
                            <span>{location.state.date}</span>
                        </div>
                        <div className=" py-5 phone text-center">
                            <span className='text-bannerText font-extrabold'>Time: </span>
                            <span>{location.state.time}</span>
                        </div>
                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='text-center text-white rounded-lg bg-bannerText px-4 py-2 self-center' onClick={showTimeHandle}>Select Seats</button>
                </div>


            </div>
        </div>
    )
}

export default BookingPage