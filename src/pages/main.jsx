import React, {useContext} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './Home';
import Results from './Results';
import Logo from '../image/logo.png';
import {DataContext} from '../store';
import ModalChar from '../Components/ModalChar';
import LoaderView from '../Components/LoaderView';

const Main = () => {
    const {active, data, loader, errpApi, infos } = useContext(DataContext)

    return (
        <div className={`${active ? '': 'modal-effect'} ${loader? 'modal-effect': ''}`}>
            <div className={`main ${active? '': 'active-blur'} ${loader? 'active-blur-loader': ''}`}>
             <img className="logo" src={Logo} alt="logo rick and morty" />
                <Switch>
                    <Route exact path="/RickMortyApi">
                       <Home />
                    </Route>
                    <Route  path="/RickMortyApi/characters">
                       <Results />
                    </Route>
                </Switch>
            </div>
            {active? '' : 
               <div className="all-body">
                    <ModalChar data={data} />
               </div>
            }
            {loader ? <div className="loading">
                    <LoaderView  />
                </div>: infos.length > 0 && <Redirect to="/RickMortyApi/characters" />
                
            }
        </ div>
    )
}

export default Main