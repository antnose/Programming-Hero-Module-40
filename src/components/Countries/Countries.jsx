import { useState, useEffect } from "react";
import Country from "../Country/Country";

const Countries = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      {countries.map((country) => (
        <Country key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default Countries;
