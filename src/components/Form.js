const Form = ({ setCity, getWeather }) => {
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="City name"
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit" onClick={getWeather}>
        Get weather
      </button>
    </form>
  );
};

export default Form;
