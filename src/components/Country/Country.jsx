import "./Country.css";

const Country = ({ country }) => {
  return (
    <div className="country">
      <div className="imgDiv">
        <img
          className="image"
          src={country.flags.png}
          alt={country.name.common}
        />
      </div>

      <h4> Name : {country.name?.common} </h4>
      <p>
        {" "}
        Area is: {country.area} km and population is: {country.population}
      </p>
    </div>
  );
};

export default Country;
