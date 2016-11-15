var React = require('react');

var WeatherMessage = ({temp, city}) => {
  return (
    <div>The temperature in {city} is {temp}</div>
  )
};

module.exports = WeatherMessage;
