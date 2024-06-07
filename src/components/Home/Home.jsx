import React from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useGetBooksQuery } from '../../api/books';


const Home = () => {

  const { data } = useGetBooksQuery();
  return (

    <section>

      <div className='flex justify-between py-16 px-16 items-center'>


        <h1 className='text-2xl uppercase font-bold'>Personal <span className='text-green-600'>Bookshelf.</span></h1>

        <div className='flex items-center justify-center '>
          <IoSearchOutline size={25} className='' />
          <input type="text" className='border-b-2 rounded-lg px-10 py-2 focus:outline-none ' placeholder='Search By Book Name' />


        </div>

        <div className='flex justify-center items-center'>
          <div className='flex-1'>
            <button className='px-10 py-2 bg-green-500 text-white rounded-lg hover:scale-105 duration-300'>
              My Bookshelf
            </button>
          </div>
        </div>

      </div>


      <div>
        {data && data?.docs?.map((item,index) => (
          <div>
            {item.title}
            <img src={item.img} alt="" />
          </div>
        ))}
      </div>








    </section>
  )
}

export default Home
