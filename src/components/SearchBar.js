import React, { useState } from "react";
import { BiSearchAlt } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';



export const SearchBar = ({ data }) => {
    const [wordEntered, setWordEntered] = useState("");
    const [filteredData, setFilteredData] = useState([]);



    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
    };


    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    //console.log(wordEntered)


    return (
        <div className="search">
            <div className="searchInputs">
                <input
                    type="text"
                    placeholder='Search......'
                    value={wordEntered}
                    onChange={handleFilter}
                />
                <div className="searchIcon">

                    <BiSearchAlt />

                </div>
            </div>

        </div>
    )
}
