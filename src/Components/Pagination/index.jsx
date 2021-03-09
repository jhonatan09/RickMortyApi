import React, {useContext, useState} from 'react';
import {DataContext} from '../../store';

const NumbPages = () => {
    const {pages, NewPage} = useContext(DataContext)

    const [numbers] = useState(pages)
    var arr = []

    const pagesT = () => {
        if( numbers > 1){
            for(var i = 1; i <= numbers; i++) {
               arr.push(i)
            }
        }
    }
    pagesT()
    


    return (
        <div className="pages">
            <ul>
               {arr.map(item => {
                   return(
                    <li 
                        key={item} 
                        onClick={ () => NewPage(item)}
                    >
                            {item}
                    </li>
                   )
               })}
            </ul>
        </div>
    )
}


export default NumbPages;