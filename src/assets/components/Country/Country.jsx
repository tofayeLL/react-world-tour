import './Country.css'
const Country = ({country}) => {
    console.log(country);
    const {name, flags} = country;
    return (
        <div className="style">
            <h3>country: {name?.common}</h3>
            <img src={flags.png} alt="" />

            
        </div>
    );
};

export default Country;