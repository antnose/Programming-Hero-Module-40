import { useState } from "react";
import "./Country.css";

const Country = ({ country, handleVisitedCountry }) => {
  const [visited, setVisited] = useState(false);

  const handleVisited = () => {
    setVisited(!visited);
  };

  const passWithParams = (country) => {
    handleVisitedCountry(country);
  };

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
        Area is: {country.area} km and population is: {country.population}
      </p>
      <p>
        <small> Code: {country.cca3} </small>
      </p>

      <button onClick={handleVisitedCountry}>Mark Visited</button>
      <br />
      <button onClick={passWithParams}>Visited</button>
      {visited ? (
        <imghandleVisitedCountry
          width="30px"
          src={
            "https://img.icons8.com/?size=100&id=85086&format=png&color=000000"
          }
        />
      ) : (
        "I want to visit"
      )}
    </div>
  );
};

export default Country;
