import React,{useContext} from 'react';
import {DataContext} from '../../store';

const SearchBar = () => {
    const {charName, setCharName, hadleClick} = useContext(DataContext)
    return (
        <div className="search">
                    <input 
                placeholder="type character name"
                value={charName}
                onChange={(e) => setCharName(e.target.value)} 
            />
            <button onClick={() => hadleClick(charName)}>
                Search
            </button>
        </div>
    )
}


export default SearchBar;