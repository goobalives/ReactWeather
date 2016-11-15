var axios = require('axios');

const OPEN_WEATHER_MAP_API = "http://api.openweathermap.org/data/2.5/weather?appid=1c2fc80a12ffc1452e1c29101bc59e0d&units=metric";

module.exports = {

  getTemp: function (location) {

    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_API}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      debugger;
      if (res.data.cod && res.data.message) {
        throw new Error(res.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (res) {
      throw new Error(res.data.message);
    });
  }
}
