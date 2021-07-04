const Form = (props) => {
  return (
    <form>
      <input
        type="text"
        name="city"
        placeholder="City name"
        onChange={(e) => props.setCity(e.target.value)}
      />
      <button type="submit" onClick={props.getWeather}>
        Get weather
      </button>
    </form>
  );
};

export default Form;
