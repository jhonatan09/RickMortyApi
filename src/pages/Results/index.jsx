import React, {useContext} from 'react';
import {DataContext} from '../../store';
import Pagination from '../../Components/Pagination';
import SearchBar from '../../Components/SearchBar';


const Results = () => {

    
    const {infos, active, setActive, data,setData} = useContext(DataContext)
    

    const ClickDetails = (id) => {
        fetch("https://rickandmortyapi.com/graphql", {
                    method: 'POST',
                    headers: {"Content-Type": "application/json"},
                    body: JSON.stringify({
                      query: `
                        query {
                            character(id: ${id}){
                                id
                                name
                                status
                                gender
                                species
                                origin{
                                    id
                                    name
                                    type
                                    dimension
                                    residents{
                                    id
                                    name
                                    }
                            
                                }
                                location{
                                    id
                                    name
                                    type
                                    dimension
                                    residents{
                                    id
                                    name
                                    }
                                }
                                image
                                episode{
                                    id
                                    name
                                    air_date
                                    episode
                                }
                            }
                    }
                `
            })
        })
        .then(res => res.json())
        .then(data => {
            setData(data.data.character)
            setActive(false)
        })
        
    }

                            
 

    return(
        <div className="results">
            <SearchBar />
            <div className="results-content">
                {
                    infos.map( char => {
                        return(
                            <div key={char.id} className="card" onClick={() => ClickDetails(char.id)}>
                                <img src={char.image} alt={char.name}/>
                                <div className="content">
                                    <h3>
                                        {char.name}
                                    </h3>
                                    <span>
                                        {char.species}
                                    </span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
                
            <Pagination />
        </div>
    )
}

export default Results;