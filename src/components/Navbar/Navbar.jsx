import React, { useState } from 'react'
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { useGetSearchBooksQuery } from '../../api/books';
import Home from '../Home/Home';


const Navbar = () => {
    const navigate = useNavigate();
    const [search,setSearch] = useState('');



    const handleSearch = () => {
        if(search.trim() !== ""){
            navigate(`?q=${search}`);
        } else {
            navigate('/')
            window.location.reload();
        }
    }


    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    };


    const handleInputChange = (e) => {
        setSearch(e.target.value);
        if (e.target.value.trim() === '') {
            navigate('/');
        }
    };



    


    return (
        <div>
            <div className='flex justify-between py-16 px-16 items-center'>

                <h1 onClick={() => navigate('/')} className='text-2xl cursor-pointer max-sm:text-xl uppercase font-bold'>Personal <span className='text-green-600'>Bookshelf.</span></h1>

                <div className='flex items-center justify-center '>
                    <IoSearchOutline size={25} className='' onClick={handleSearch}/>
                    <input value={search} onChange={handleInputChange} onKeyDown={handleKeyPress} type="text" className='border-b-2 rounded-lg px-5 py-2 focus:outline-none ' placeholder='Search By Book Name' />


                </div>

                <div className='flex justify-center  items-center'>
                    <div className=''>
                        <button onClick={() => navigate('/mybooks')} className='md:px-10 px-5 py-2 bg-green-500 text-white rounded-lg hover:scale-105 duration-300'>
                            My Bookshelf
                        </button>
                    </div>
                </div>

            </div>


            
        </div>
    )
}

export default Navbar