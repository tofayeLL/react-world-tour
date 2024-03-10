import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleMarkAsRead = (country) => {
      const newVisitedCountries = [...visitedCountries, country]
      setVisitedCountries(newVisitedCountries);
    }



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>
            <div className="countries-container">
                {
                    countries.map(country => <Country 
                        country={country}
                        key={country.cca3}
                        handleMarkAsRead={handleMarkAsRead}

                        ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;