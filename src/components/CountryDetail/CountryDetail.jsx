import CountryData from "../CountryData/CountryData";

function CountryDetail(props) {
  return (
    <div>
      <h4>Hello I am from Country Detail</h4>
      <hr />
      <CountryData {...props} />
    </div>
  );
}

export default CountryDetail;
