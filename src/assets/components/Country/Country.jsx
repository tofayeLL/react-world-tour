import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
    console.log(country);
    const { name, flags, population, area, cca3 } = country;
    const [visited, setVisited] = useState(false);
    const handleVisited = () => {
        setVisited(!visited);

    }
    return (
        <div className="style">
            <h3>country: {name?.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>code: {cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'visited' : 'going'}</button>
            {visited ? 'visited' : 'I want to visit'}


        </div>
    );
};

export default Country;