var React = require('react');

var WeatherMessage = ({temp, city}) => {
  return (
    <div className="text-center">The temperature in {city} is {temp}</div>
  )
};

module.exports = WeatherMessage;
