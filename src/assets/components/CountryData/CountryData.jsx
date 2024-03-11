const CountryData = (props) => {
    const {country, handleMarkAsRead, handleVisitedFlags} = props;
    return (
        <div>
            <h3>Country Data: {country.name.common}</h3>
            
        </div>
    );
};

export default CountryData;