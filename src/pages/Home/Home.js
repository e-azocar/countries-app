import React, { useState, useEffect } from "react";
import Country from "../../components/Country/Country";
import Loading from "../../components/Loading/Loading";
import api from "../../lib/api";

import "./Home.scss";

const Home = () => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const res = await api.get("/region/ame");
    const data = res.data.filter((country) => country.independent);
    setCountries(data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  if (!countries.length) return <Loading />;

  return (
    <div className="home-container">
      <h1 className="general-title">American Countries</h1>

      <div className="countries-list">
        {countries.map((country, index) => (
          <Country data={country} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Home;
