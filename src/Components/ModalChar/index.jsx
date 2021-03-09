import React, {useState, useContext} from 'react';
import {DataContext} from '../../store';

const ModalChar = ({data}) => {
    const {setActive} = useContext(DataContext)

    console.log(data)

    const [LastLocation] = useState(data.episode)
    const [LocationResidents] = useState(data.location.residents)
    const [OriginResidents] = useState(data.origin.residents)
    const [activeClickChar, setActiveclickChar] = useState(true)
    const [OriginDimension] = useState(data.origin.dimension)
    const [LocationDimension] = useState(data.location.dimension)

    console.log()
    
    console.log(LocationDimension)
    var last = [...LastLocation].pop();
    // var residentsTotalLocations = LocationResidents.length;
    
    const CloseModal = () => {
        setActive(true)
    }
    
    
    return (
        <div className="modal">
            <div className="modal_left">
            <button onClick={() => CloseModal()}>
                Close
            </button>
                <img src={data.image} alt={data.name} />
                <div className="text">
                    <h3>
                        {data.name}
                    </h3>
                    <span>
                        {data.species}
                    </span>
                </div>
            </div>
            <div className="modal_right">
                <div className="modal_texts">
                    <div className="first">
                        <h3>
                            About
                        </h3>
                        <p>
                            {data.name} is a {data.gender} {data.species}.
                            {data.gender === "Male"? "He": "She"} is <span className="status">{data.status}</span> and well.
                            Last seen in {last.air_date}.

                        </p>
                    </div>
                    <div className="second">
                        <h3>Origin</h3>
                        <p>
                            <span className="planet">Planet</span>
                            <span className="planet-name">{data.origin.name}</span>
                            <span className="planet-dimension">{LocationDimension === null? '': LocationDimension}</span>
                        </p>
                        <span className="reidents">{OriginResidents?.length}</span>
                    </div>
                    <div className="third">
                        <h3>
                            Location
                        </h3>
                        <p>
                            <span className="planet">Planet</span>
                            
                            <span className="planet-name">{data.location.name}</span>
                            <span className="planet-dimesion">{OriginDimension === null? '': OriginDimension}</span>
                        </p>
                        <span className="reidents">{LocationResidents?.length}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalChar;