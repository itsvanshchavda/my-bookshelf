import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom'
import { addBooks, removeBook } from '../../slices/BookShelf';
import { FaRegFaceSadCry } from "react-icons/fa6";



const MyBooks = () => {

  const navigate = useNavigate();
  const  {myBooks} = useSelector(state => state.userbooks)
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(myBooks)
  }, [myBooks])


  const handleAddBooks = (book) => {
    dispatch(addBooks(book))
    console.log(book)

  }

  const handleRemove = (title) => {
    dispatch(removeBook({title}))
  }


  return (
    <div>
      {/* Custom Navbar */}

      <div>
        <div className='flex justify-between gap-20 py-16 px-20 items-center'>

          <h1 onClick={() => navigate('/')} className='text-2xl cursor-pointer max-sm:text-xl uppercase font-bold'>Personal <span className='text-green-600'>Bookshelf.</span></h1>

          <div>
            <h1 className='text-2xl font-semibold shadow-2xl rounded-lg shadow-black px-10 py-2'>My Bookshelf</h1>
          </div>

          <div className='flex justify-center items-center'>
            <div className=''>
              <button onClick={() => navigate('/')} className='md:px-10 px-5 py-2 bg-green-500 text-white rounded-lg hover:scale-105 duration-300'>
                Home
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* All Saved Books */}

      <div>

          {myBooks?.length > 0  ? (
            <div className='grid py-10 grid-cols-4 max-sm:grid-cols-1 max-xl:grid-cols-2 px-20 gap-10 place-content-center mb-10'>


            {myBooks && myBooks.map((item, index) => (
              <div key={index} className='flex border rounded-md hover:shadow-xl cursor-pointer duration-300 gap-4 w-auto h-44 flex-col justify-center items-center'>
                <h1>{item?.title}</h1>
                <p>{item.edition_count}</p>

                {myBooks?.find(book => book.title === item?.title) ? (
                  <button type='submit' onClick={() => handleRemove(item?.title)} className='md:px-10 px-5  bg-zinc-700  text-white py-2 rounded-lg'>Remove Book</button>
                ) : (
                  <button type='submit' onClick={() => handleAddBooks(item)} className='md:px-10 px-5  bg-green-500  text-white py-2 rounded-lg'>Add To Bookshelf</button>

                )}

              </div>
            ))}

          </div>
          ) : (
            <div className='flex justify-center gap-2 py-20 items-center'>
              <h1 className='text-xl font-semibold '>Please Add Some Books</h1>
              <FaRegFaceSadCry  size={25}/>
            </div>
          )}


      </div>
    </div>
  )
}

export default MyBooks