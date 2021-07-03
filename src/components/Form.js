import { useState } from "react";

const Form = () => {
  const [city, setCity] = useState("");
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      {city}
      <button type="submit">Get weather</button>
    </form>
  );
};

export default Form;
