import "./App.css";
import { useState } from "react";
import axios from "axios";
import Title from "./components/Title";
import Form from "./components/Form";
import Results from "./components/Results";

function App() {
  const [city, setCity] = useState("");
  const [results, setResults] = useState({
    country: "",
    cityName: "",
    temperature: "",
    conditionText: "",
    icon: "",
  });
  const getWeather = (e) => {
    e.preventDefault();
    axios
      .get(
        `https://api.weatherapi.com/v1/current.json?key=94d8f656c4fc4ed8bf494411210307&q=${city}&aqi=no`
      )
      .then((res) => {
        setResults({
          country: res.data.location.country,
          cityName: res.data.location.name,
          temperature: res.data.current.temp_c,
          conditionText: res.data.current.condition.text,
          icon: res.data.current.condition.icon,
        });
      });
  };
  return (
    <div className="wrapper">
      <div className="container">
        <Title />
        <Form setCity={setCity} getWeather={getWeather} />
        <Results results={results} />
      </div>
    </div>
  );
}

export default App;
