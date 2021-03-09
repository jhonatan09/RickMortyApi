import React, {useContext} from 'react';
import ImgLoader from '../../image/loader_image.png';
import {Redirect} from 'react-router-dom';
import {DataContext} from '../../store';

const LoaderView = ({loaderData}) => {
    
    const {loader, setLoader} = useContext(DataContext)
    

    return (
        <>
           
            <div className="loader-view">
                <div className="centralize">
                    <img src={ImgLoader} alt="" height={250} width={184}/>
                        <p>Loading</p>
                </div>
            </div>
                
                
        </>
    )
}



export default LoaderView;