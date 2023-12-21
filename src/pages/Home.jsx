import React from 'react';
import onion from '../components/image/cart-img-2.png';
import watermelon from '../components/image/cart-img-1.png'
import orange from '../components/image/product-1.png'
import potato from '../components/image/product-5.png'

function Home() {
  return (
    <div className='banner h-96'>
      <div className='text-center pt-20'>
        <h1 className='text-5xl font-bold'>
          Fresh And <span className='text-orange-500'>Organic</span> Products
        </h1>
        <p className='mt-10 font-semibold text-xl'>
          Lorem Ipsum Dolor Sit, Amet Consectetur Adipisicing Elit.
          <br /> Numquam Vitae Perspiciatis Neque Soluta.
        </p>
        <div>
          <button className='mt-5 border-2 border-gray-600 hover:border-orange-500 text-gray-700 hover:text-white bg-opacity-96 hover:bg-orange-500 rounded-xl px-7 py-2 font-bold'>
            Shop Now
          </button>
        </div>
      </div>
      <div className='mt-32 mx-28 flex'>
        <div className='border border-black h-auto w-72 rounded-xl m-6 '>
          <div className='p-4 flex flex-col justify-center items-center'>
          <img src={onion} alt="Onion" />
            <h3 className='text-xl font-semibold'>Onion</h3>
            <div className='Price'>$200</div>
            <button className='mt-5 border-2 border-gray-600 hover:border-orange-500 text-gray-700 hover:text-white bg-opacity-96 hover:bg-orange-500 rounded-xl px-7 py-2 font-bold'>
              Add to Cart
            </button>
          </div>
        </div>
        <div className='border border-black h-auto w-72 rounded-xl m-6'>
          <div className='p-4 flex flex-col justify-center items-center'>
          <img src={watermelon} alt="Onion" />
            <h3 className='text-xl font-semibold'>Watermelon</h3>
            <div className='Price'>$150</div>
            <button className='mt-5 border-2 border-gray-600 hover:border-orange-500 text-gray-700 hover:text-white bg-opacity-96 hover:bg-orange-500 rounded-xl px-7 py-2 font-bold'>
            Add to Cart
            </button>
          </div>
        </div>
        <div className='border border-black h-auto w-72 rounded-xl m-6'>
          <div className='p-4 flex flex-col justify-center items-center'>
          <img src={orange} alt="Onion" />
            <h3 className='text-xl font-semibold'>Orange</h3>
            <div className='Price'>$300</div>
            <button className='mt-5 border-2 border-gray-600 hover:border-orange-500 text-gray-700 hover:text-white bg-opacity-96 hover:bg-orange-500 rounded-xl px-7 py-2 font-bold'>
            Add to Cart
            </button>
          </div>
        </div>
        <div className='border border-black h-auto w-72 rounded-xl m-6'>
          <div className='p-4 flex flex-col justify-center items-center'>
          <img src={potato} alt="potato" />
            <h3 className='text-xl font-semibold'>potato</h3>
            <div className='Price'>$90</div>
            <button className='mt-5 border-2 border-gray-600 hover:border-orange-500 text-gray-700 hover:text-white bg-opacity-96 hover:bg-orange-500 rounded-xl px-7 py-2 font-bold'>
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
