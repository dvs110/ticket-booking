import React from 'react'
import { GiHamburgerMenu } from 'react-icons/gi'
// import HeaderToggle from '../HeaderToggle/HeaderToggle'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [storedData, setstoredData] = useState('');
  const [storedData1, setstoredData1] = useState('');
  const [formData, setFormData] = useState({});
  const [formData1, setFormData1] = useState({});

  const navigate = useNavigate();
  // const toggle = () => {
  //   if (toggleMenu)
  //     setToggleMenu(false)
  //   else
  //     setToggleMenu(true)

  // }
  const handleclick = async () => {

    const storedData = localStorage.getItem('myData');
    const s = JSON.parse(storedData);
    let res = await axios.post("http://localhost:8080/finduser", s)
    setFormData1(res.data)
    console.log(res.data);
    // console.log(s);
    navigate('/ticket-history', {
      state: {
        myData: res.data
      }
    })
  }

  const handleclick1 = async () => {

    navigate('/register')
  }

  useEffect(() => {
    const s = localStorage.getItem('myData');
    const stored = JSON.parse(s);
    const s1 = localStorage.getItem('myData1');
    const stored1 = JSON.parse(s1);
    // console.log();
    setstoredData1(stored1);
    setstoredData(stored);
  }, []);
  return (
    <>
      <div className="max-w-auto sticky px-12  top-0 py-5 font-textFont bg-white drop-shadow-xl z-50">
        <div className='flex justify-between items-center w-auto'>
          {/* logo section  */}
          <div>
            {/* <img src={logo} alt="" /> */}
            <h1></h1>
          </div>
          {/* navbar section  */}
          <div >
            {/* <GiHamburgerMenu className='block md:hidden  text-black w-[30px] h-[50px] ' onClick={toggle} /> */}



            {/* desktop navbar  */}
            <nav className='hidden md:block'>
              <ul className='flex text-black font-bold text-sm uppercase space-x-10 mr-10'>
                <Link to="/"> <li><a className='hover:text-btnColor' href="home">Home</a></li></Link>
                <li><a className='hover:text-btnColor' href="">About</a></li>
                {storedData && storedData1 ? <li onClick={handleclick} className='hover:text-btnColor' style={{ cursor: "pointer" }}>Ticket</li> : ""}
                {storedData && storedData.isAdmin === true ? <li onClick={handleclick1} className='hover:text-btnColor' style={{ cursor: "pointer" }}>Buses</li> : ""}

              </ul>
            </nav>
          </div>

          {/* login and signup button section  */}
          <div className='hidden md:block'>
            {!storedData ? <Link to='/login'>  <button className='bg-btnColor px-6 py-1 text-black font-textFont rounded-2xl border-none mx-4' >
              Log in</button> </Link> : ""}
          </div>

        </div>
      </div>
      {/* mobile navbar  */}
      {/* {toggleMenu ? <HeaderToggle /> : <></>} */}

    </>
  )
}

export default Header