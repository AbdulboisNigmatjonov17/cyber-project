import React, { useState } from "react";
import Logo from '../../assets/Logo.svg'
import { NavLink } from 'react-router-dom';

import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Navbar = () => {

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsModalOpen(true);
  };

  const handleMouseLeave = () => {
    setIsModalOpen(false);
  };

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className='Container bg-white'>
      <nav className='w-full h-[10vh] flex justify-between items-center'>
        <NavLink to={'/'}>
          <img src={Logo} alt="blackLogo" />
        </NavLink>
        <form className=' flex p-2 w-[370px] bg-[#F5F5F5] rounded-md border-black border-[1px]'>
          <SearchIcon />
          <input className=' w-full bg-[#F5F5F5]' type="text" placeholder='Search' />
        </form>
        <ul className='flex gap-7'>
          <li>
            <NavLink
              to={'/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-bold'
                  : 'text-[#8B8B8B]'
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/about'}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-bold'
                  : 'text-[#8B8B8B]'
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'/contact'}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-bold'
                  : 'text-[#8B8B8B]'
              }
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to={'blog/'}
              className={({ isActive }) =>
                isActive
                  ? 'text-black font-bold'
                  : 'text-[#8B8B8B]'
              }
            >
              Blog
            </NavLink>
          </li>
        </ul>
        <div className="icons flex gap-5">
          <NavLink to={'/likes'}>
            <FavoriteBorderIcon />
          </NavLink>
          <NavLink to={'/shop'}>
            <ShoppingCartOutlinedIcon />
          </NavLink>
          <PermIdentityOutlinedIcon
            className="cursor-pointer relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={handleClick} />
        </div>
        {isModalOpen && (
          <div className="modal  absolute top-12 right-[50px] bg-[#fafafa] shadow-2xl px-6 py-2 rounded">
            <div className="flex items-center gap-3">
              <AccountCircleIcon fontSize="large" />
              <div>
                <h3 className="font-medium">Costa RICO</h3>
                <span className="opacity-80">ricoc2609@gmail.com</span>
              </div>
            </div>
            <button className="bg-blue-500 mt-2 text-white w-full rounded-sm font-medium py-1" type="submit">Continue as Costa</button>
          </div>
        )}
      </nav>
    </div>
  )
}

export default Navbar

// < li > <NavLink to={'/'}>Home</NavLink></ >
//         <li><NavLink to={'/about'}>About</NavLink></li>
//         <li><NavLink to={'/contact'}>Contact Us</NavLink></li>
//         <li><NavLink to={'/blog'}>Blog</NavLink></li>


//   < NavLink
// to = { '/'}
// className = {({ isActive }) =>
// isActive
//   ? 'text-black underline underline-offset-8'
//   : 'text-[#8B8B8B]'
// }
// >
//   New Arrivel
// </ >
// <NavLink
// to={'/bestSeller'}
// className={({ isActive }) =>
//     isActive
//         ? 'text-black underline underline-offset-8'
//         : 'text-[#8B8B8B]'
// }
// >
// Bestseller
// </NavLink>
// <NavLink
// to={'/featuredProducts'}
// className={({ isActive }) =>
//     isActive
//         ? 'text-black underline underline-offset-8'
//         : 'text-[#8B8B8B]'
// }
// >
// Featured Products
// </NavLink> 