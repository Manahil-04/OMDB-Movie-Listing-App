import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';

import Button from '../button/button'

import './searchField.css';

const SearchField = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const navigate = useNavigate();


    const handleSearch = (event) =>{
        const value = event.target.value;
        setSearchTerm(value)
    };

    const handleButtonClick = () => {
        if (searchTerm) {
            navigate(`/movies/${encodeURIComponent(searchTerm)}`);
        }
    }
    console.log('button is clicked')


    return (
        <div className='search-field'>
            <input
                type='text'
                value = {searchTerm}
                onChange={handleSearch}
                placeholder='Search movies...'
            />
            <Button onClick={handleButtonClick} text='Search'/>    

        </div>
    )
};

export default SearchField;