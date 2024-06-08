import React, { useState } from 'react';
import { IoSearchOutline } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    const [search, setSearch] = useState('');

    const handleSearch = () => {
        if (search.trim() !== "") {
            navigate(`?q=${search}`);
        } else {
            navigate('/')
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
            window.location.reload();
        }
    };

    return (
        <div className='flex flex-col md:flex-row justify-between items-center py-4 px-4 md:py-10 md:px-10'>
            <h1 onClick={() => navigate('/')} className='text-xl md:text-2xl cursor-pointer uppercase font-bold mb-4 md:mb-0'>
                Personal <span className='text-green-600'>Bookshelf.</span>
            </h1>

            <div className='flex items-center justify-center mb-4 md:mb-0'>
                <IoSearchOutline size={25} className='cursor-pointer' onClick={handleSearch} />
                <input 
                    value={search} 
                    onChange={handleInputChange} 
                    onKeyDown={handleKeyPress} 
                    type="text" 
                    className='border-b-2 rounded-lg px-3 py-2 focus:outline-none ml-2' 
                    placeholder='Search By Book Name' 
                />
            </div>

            <button 
                onClick={() => navigate('/mybooks')} 
                className='md:px-8 px-4 py-2 bg-green-500 text-white rounded-lg hover:scale-105 duration-300'>
                My Bookshelf
            </button>
        </div>
    );
}

export default Navbar;
