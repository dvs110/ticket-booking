import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const CustomerBookingDetail = () => {
    const navigation = useNavigate();
    const location = useLocation()
    console.log(location.state)
    const [formData, setFormData] = useState({
        firstname: '',
        lastname: '',
        phone: '',
        seat: '',
        address: ''
    });
    const setData = (e) => {
        const p = location.state;
        console.log(e.target.name);
        console.log(e.target.value);

        if (e.target.value >= 1 && e.target.value < location.state.totalseats)
            setFormData({ ...formData, [e.target.name]: e.target.value })
        else if (e.target.value > location.state.totalseats)
            setFormData({ ...formData, [e.target.name]: location.state.totalseats })
        else
            setFormData({ ...formData, [e.target.name]: 1 })






    }
    console.log(location.state);

    const confirmPageHandle = () => {
        const p = location.state;
        p.price = p.price * formData.seat
        navigation('/confirm', {
            state: {

                seat: `${formData.seat}`,
                pdata: p
            }
        })
    }
    return (
        <div className='text-black w-full min-h-[100vh] flex justify-center items-center'>
            <div className='w-[70%] h-[500px]  border border-green-700 rounded-lg'>
                <div className='py-5'>
                    <h1 className='text-center text-5xl font-bold pb-4 border-b-2'></h1>
                    <div className=' grid  justify-center'>


                        <div className="py-5 text-center">
                            <input required type="number" name="seat" id="" value={formData.seat} placeholder='Seat' className='border  pl-3 py-3' onChange={setData} />
                        </div>

                    </div>
                </div>
                <div className='flex justify-center'>
                    <button className='text-center text-white rounded-lg bg-bannerText px-4 py-2 self-center' onClick={confirmPageHandle}>Submit Details</button>
                </div>
                {/* {show?<TimeSlot/>:<></>} */}

            </div>
        </div>
    )
}

export default CustomerBookingDetail