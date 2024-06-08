import React, { useEffect, useState } from 'react';
import { useGetBooksQuery, useGetSearchBooksQuery } from '../../api/books';
import Loader from '../Loader/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { addBooks, removeBook } from '../../slices/BookShelf';
import Navbar from '../Navbar/Navbar';
import { useLocation } from 'react-router-dom';
import { FaRegFaceSadCry } from 'react-icons/fa6';

const Home = () => {
  const { data, isLoading } = useGetBooksQuery();
  const dispatch = useDispatch();
  const { myBooks } = useSelector((state) => state.userbooks);
  const { search } = useLocation();
  const { data: searchPost, isLoading: isSearchLoading, isUninitialized } = useGetSearchBooksQuery(search);
  const [error, setError] = useState('')


  useEffect(() => {
    if (searchPost?.docs.length === 0) {
      setError("Post is not found")
    }
  }, [searchPost])


  const handleAddBooks = (book) => {
    dispatch(addBooks(book));
    console.log(book);
  };

  const handleRemove = (title) => {
    dispatch(removeBook({ title }));
  };

  const booksData = searchPost?.docs || data?.docs;



  return (
    <section>
      <Navbar />
      {(isLoading || isSearchLoading) && <Loader />}
      {error ? (
        <div className='flex justify-center gap-2 py-20 items-center'>
          <h1 className='text-xl font-semibold '>Post Not Found</h1>
          <FaRegFaceSadCry size={25} />
        </div>
      ) : (
        <div>
          <div className='grid grid-cols-4 max-sm:grid-cols-1 max-xl:grid-cols-2 px-20 gap-10 place-content-center mb-10'>
            {booksData?.map((item, index) => (
              <div key={index} className='flex border rounded-md hover:shadow-xl cursor-pointer duration-300 gap-4 w-auto h-44 flex-col justify-center items-center'>
                <h1>{item?.title}</h1>
                <p>{item?.edition_count}</p>
                {myBooks?.some((book) => book.title === item?.title) ? (
                  <button type='submit' onClick={() => handleRemove(item?.title)} className='md:px-10 px-5 bg-zinc-700 text-white py-2 rounded-lg'>
                    Remove Book
                  </button>
                ) : (
                  <button type='submit' onClick={() => handleAddBooks(item)} className='md:px-10 px-5 bg-green-500 text-white py-2 rounded-lg'>
                    Add To Bookshelf
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>

  );
};

export default Home;
