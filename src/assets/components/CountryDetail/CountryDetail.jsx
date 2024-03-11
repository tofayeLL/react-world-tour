import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
   
    return (
        <div>
            <h3>Country Details</h3>
            <hr />
           {/*  <CountryData
            country={country}
            handleMarkAsRead={handleMarkAsRead}
            handleVisitedFlags={handleVisitedFlags}
            
            ></CountryData> */}
            <CountryData {...props}></CountryData>
            
        </div>
    );
};

export default CountryDetail;