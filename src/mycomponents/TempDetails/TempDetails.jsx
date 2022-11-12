import React, { useEffect, useState } from "react";
import "./tempdetails.css";
const TempDetails = () => {
  const [city, setCity] = useState("Mumbai");
  const [temp, setTemp] = useState();
  const handleChange = (e) => {
    const { value } = e.target;
    setCity(value);
  };

  const getTemp = async () => {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=fa623f8dd59af841245718263e0929e2`
      );
      console.log(response);
      const json = await response.json();
      console.log(json);
      setTemp(json?.main);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getTemp();
  }, [city]);
  return (
    <div className="tempdetailsflexxcol">
      <h1 className="head">Check Temerature</h1>
      <input
        value={city}
        onChange={handleChange}
        className="query"
        type="search"
        name="city"
        placeholder="Enter Your City"
        id=""
      />
      <h1 className="cityname">
        {" "}
        <i class="fa-solid fa-street-view"></i>
        {city.length === 0 ? "Search Anywhere" : city}{" "}
      </h1>
      {temp?.temp ? (
        <>
          <h2 className="citytemp">
            {" "}
            <p>{temp?.temp} &#8451; </p>
            <p>Feel Like : {temp?.feels_like} &#8451; </p>
          </h2>
          <h3 className="specify">
            {" "}
            Min: {temp?.temp_min} &#8451; &nbsp;| &nbsp; Max: {temp?.temp_max}{" "}
            &#8451;
          </h3>
        </>
      ) : (
        "No Resuts Found"
      )}
    </div>
  );
};

export default TempDetails;
