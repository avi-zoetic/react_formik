import React, { useState } from "react";
import RegistrationForm from "./form/RegistrationForm";
import CityForm from "./form/fieldArray/cityForm";
import "./form/home.css";

const HomePage = () => {
  const [showRegistrationForm, setShowRegistrationForm] = useState(false);
  const [showCityForm, setShowCityForm] = useState(false);

  const handleRegisterClick = () => {
    setShowRegistrationForm(true);
  };

  const handleCityClick = () => {
    setShowCityForm(true);
  };

  return (
    <div className="homepage">
      <h2 className="subtitle">Please register to continue</h2>
      {showRegistrationForm ? (
        <RegistrationForm />
      ) : (
        <button className="btn btn-primary" onClick={handleRegisterClick}>
          Register
        </button>
      )}

      <h3> Field Array Demo </h3>

      {showCityForm ? (
        <CityForm />
      ) : (
        <button className="btn btn-primary" onClick={handleCityClick}>
          City form
        </button>
      )}
    </div>
  );
};

export default HomePage;
