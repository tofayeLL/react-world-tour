import { useState } from 'react';
import './Country.css'
import CountryDetail from '../CountryDetail/CountryDetail';
const Country = ({ country, handleMarkAsRead, handleVisitedFlags }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);

    }
   
   
    
    return (
        <div className={`style ${visited ? 'visited' : ''}`} >
            <h3 style={{color: visited ? 'purple' : 'black'}}>country: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={() => handleMarkAsRead(country)}>Mark As Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>Add Flags</button>
             <br />
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'visited' : 'I want to visit'}
            <br />
            <hr />
            <CountryDetail
            country={country}
            handleMarkAsRead={handleMarkAsRead}
            handleVisitedFlags={handleVisitedFlags}

            
            >
                
            </CountryDetail>


        </div >
    );
};

export default Country;