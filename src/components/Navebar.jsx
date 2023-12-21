import React from 'react';
import { Link } from 'react-router-dom'
import cart from './image/grocery-store.png';

function Navebar() {
  return (
    <div>
      <div className='m-5 mx-4 lg:mx-20'>
        <nav className='flex flex-wrap justify-between items-center'>
          <Link to="/" className='text-3xl lg:text-4xl'>Tomato</Link>

          <div className='lg:hidden mt-2'>
            <Link to='/cart' className='text-gray-700 hover:text-orange-500 font-bold text-lg'>
              <img src={cart} alt="Shopping Cart" className='h-7'/>
            </Link>
          </div>

          <div className='hidden lg:flex mx-auto'>
            <ul className='flex mt-2'>
              <li className='mx-3 lg:mx-npx tailwindcss init7'><Link to="/Home" className='text-gray-700 hover:text-orange-500 font-bold text-lg'>Home</Link></li>
              <li className='mx-3 lg:mx-7'><Link to="/Product" className='text-gray-700 hover:text-orange-500 font-bold text-lg'>Products</Link></li>
              <li className='mx-3 lg:mx-7'><Link to="/Categories" className='text-gray-700 hover:text-orange-500 font-bold text-lg'>Categories</Link></li>
              <li className='mx-3 lg:mx-7'><Link to="/Contact" className='text-gray-700 hover:text-orange-500 font-bold text-lg'>Contact</Link></li>
            </ul>
          </div>

          <div className='hidden lg:block mt-2'>
            <Link to='/Cart'>
              <img src={cart} alt="Shopping Cart" className='h-7'/>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navebar;
