import { Link } from 'react-router-dom';
import Logo from '../assets/images/Travling.png'

function Header() {

  return (
    <header className={" h-[112px] w-[1440px] max-w-full flex flex-row items-center justify-between"}>
      <a
        href="/"
      >
        <img src={Logo} alt="" className='mt-2 h-[35px] w-[141px]' />
      </a>
      <div className='space-x-[80px] font-bold text-[20px]'>
        <a className='hover:text-white' href="/product">
          Product
        </a>
        <a className='hover:text-white' href="/contact">
          Contact
        </a>
        <a className='hover:text-white' href='about-us'>
          About Us
        </a>
      </div>
      <button className='bg-[#FA8443] rounded-lg h-[46px] w-[120px] text-white'>
        <Link to="/login">
          Sign Up
        </Link>

      </button>
    </header>
  )
}

export default Header