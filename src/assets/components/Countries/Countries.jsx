import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './Countries.css'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    const [visitedCountries, setVisitedCountries] = useState([]);
    const [visitedFlags, setVisitedFlags] = useState([]);


    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])


    const handleMarkAsRead = (country) => {
        const newVisitedCountries = [...visitedCountries, country]
        setVisitedCountries(newVisitedCountries);
    }

    const handleVisitedFlags = (flag) => {
        const newVisitedFlags = [...visitedFlags, flag];
        setVisitedFlags(newVisitedFlags);

    }



    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            {/* visited countries */}
            <div>
                <h4>Visited Countries: {visitedCountries.length}</h4>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }

                </ul>
            </div>

            {/* display flag */}
            <div className="flag-container img">
                {
                    visitedFlags.map((flag, index) => <img key={index} src={flag} ></img>)
                }
            </div>

            {/* display countries */}
            <div className="countries-container">
                {
                    countries.map(country => <Country
                        country={country}
                        key={country.cca3}
                        handleMarkAsRead={handleMarkAsRead}
                        handleVisitedFlags={handleVisitedFlags}

                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;