import React, {useContext, useState} from 'react'
import {DataContext} from '../../store';
import LoaderView from '../../Components/LoaderView';
import SearchBar from '../../Components/SearchBar';

const Home = () => {
    return (
        <>
            <div className={`home`}>
                <SearchBar />
            </div>
            
        </>
    )
}
export default Home;