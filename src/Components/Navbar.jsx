import { Badge } from '@mui/material';
import React from 'react'
import { FaShoppingCart, FaSignInAlt, FaStore } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {

    const path = useLocation().pathname ;

  return (
    <div className='h-[70ox] bg-custom-gradient text-white z-50 flex items-center sticky top-0'>
        <div className=' lg:px-14 sm:px-8 px-4 w-full flex justify-between'>
            <Link to='/' className='flex items-center text-2xl font-bold'>
                <FaStore className='text-3xl mr-2' />
                <span className='font-[Poppins]'>Store</span>
            </Link>
        </div>

        <ul className='flex text-slate-800 gap-5 mr-5'>
            
            <li className='font-[500px] transition-all duration-150'>
                <Link className={`${
                    path === '/' ? 'text-white font-semibold' : 'text-gray-300'  
                }`}
                to="/">Home</Link>
            </li>

            <li className='font-[500px] transition-all duration-150'>
                <Link className={`${
                    path === '/products' ? 'text-white font-semibold' : 'text-gray-300'  
                }`}
                to="/products">Products</Link>
            </li>

            <li className='font-[500px] transition-all duration-150'>
                <Link className={`${
                    path === '/above' ? 'text-white font-semibold' : 'text-gray-300'  
                }`}
                to="/above">Above</Link>
            </li>

            <li className='font-[500px] transition-all duration-150'>
                <Link className={`${
                    path === '/contact' ? 'text-white font-semibold' : 'text-gray-300'  
                }`}
                to="/contact">Contact</Link>
            </li>

            <li className='font-[500px] transition-all duration-150'>
                <Link className={`${
                    path === '/cart' ? 'text-white font-semibold' : 'text-gray-300'  
                }`}
                to="/cart">
                    <Badge 
                        showZero
                        badgeContent={0}
                        color='primary'
                        overlap='circular'
                        anchorOrigin={{vertical: 'top', horizontal: 'right'}}>
                            <FaShoppingCart size={20} />
                    </Badge>
                </Link>
            </li>

            <li className='font-[500px] transition-all duration-150'>
                <Link className='flex items-center space-x-2 px-4 py-[6px] bg-gradient-to-r from-purple-600 to-red-500
                                 text-white font-semibold rounded-md shadow-lg hover: from-purple-500 hover:to-red-400 
                                 transition duration-300 ease-in-out transform'
                to="/login">
                    <FaSignInAlt/>
                    <span>Login</span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Navbar