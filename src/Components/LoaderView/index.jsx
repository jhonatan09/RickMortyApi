import React from 'react';
import ImgLoader from '../../image/loader_image.png';

const LoaderView = () => {
    
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