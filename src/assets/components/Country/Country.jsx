import { useState } from 'react';
import './Country.css'
const Country = ({ country, handleMarkAsRead }) => {
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
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'visited' : 'I want to visit'}


        </div >
    );
};

export default Country;