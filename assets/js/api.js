const api_key = "0884ef7c5061d8fa8406420d63f9eb1d";

/**
 * Отримання даних з сервера
 * @param {string} URL API url
 * @param {Function} callback callback
 */
export const fetchData = function (URL, callback) {
  fetch(`${URL}&appid=${api_key}`)
    .then(res => res.json())
    .then(data => callback(data));
}

export const url = {
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?${lat}&${lon}&units=metric&lang=uk`
  },
  forecast(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/forecast?${lat}&${lon}&units=metric&lang=uk`
  },
  airPollution(lat, lon) {
    return `http://api.openweathermap.org/data/2.5/air_pollution?${lat}&${lon}&lang=uk`
  },
  reverseGeo(lat, lon) {
    return `http://api.openweathermap.org/geo/1.0/reverse?${lat}&${lon}&limit=5&lang=uk`
  },
  /* Пошуковий запит */
  geo(query) {
    return `http://api.openweathermap.org/geo/1.0/direct?q=${query}&limit=5&lang=uk`
  }
}