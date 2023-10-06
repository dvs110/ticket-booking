import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import ServiceCard from '../ServiceCard/ServiceCard'
import { MdArrowForwardIos } from 'react-icons/md'
// import Filter from '../Filter/Filter'
import BookingPage from '../../pages/BookingPage/BookingPage'


const ServiceProvider = () => {
    // const navigate=useNavigate();
    const location = useLocation();
    console.log(location.state.myData)

    return (
        <>
            <Header />
            <div className="outer-div flex text-black">

                {/* card container start  */}
                <div className="data-display">
                    <div className="info  md:px-12 px-2 pt-6">
                        <span className='text-bannerText font-bold'>Location{<MdArrowForwardIos className='inline ml-1' />}  {location.state.work}</span>
                    </div>
                    <div className='grid grid-cols-3 relative'>

                        {location.state.myData.filter((val) => {
                            console.log("Inside Filter function", val.work)
                            console.log("Inside Filter function1", location.state.work)
                            return (val.work === location.state.work)
                        }).map((val, index) => {
                            // console.log("data inside map func:",val)
                            return (
                                <ServiceCard
                                    key={index}
                                    name={`${val.firstName}`}
                                    location={`${val.city}`}
                                    imgUrl={val.photo}
                                    time={val.time}
                                    date={val.date}
                                    phone={val.phone}
                                    work={val.work}
                                    price={val.amount}
                                    age={val.age}
                                    status={val.status}
                                    seats={val.seats}
                                />
                            )
                        })
                        }


                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ServiceProvider