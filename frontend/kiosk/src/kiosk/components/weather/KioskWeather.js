/** @jsxImportSource @emotion/react */
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router";
import { KioskHomeWeatherImg, KioskHomeWeatherStyle, KioskHomeWeatherTextBox, weatherDescriptionStyle, weatherImg } from "../../style/rentStyle";

const KioskWeather = () => {
  const [celsius, setCelsius] = useState(0);
  const [windspeed, setWindspeed] = useState(0);
  const [weatherIcon, setWeatherIcon] = useState("");
  const [weatherDescription, setWeatherDescription] = useState("");
  const { id } = useParams();
  const API_key = process.env.REACT_APP_WEATHER_API_KEY;

  const getWeatherInfo = async (id) => {
    let lat, lon;
    if (Number(id) === 1) {
      lat = "36.10720148408362";
      lon = "128.41786543716924";
    } else if (Number(id) === 2) {
      lat = "36.1028517393142";
      lon = "128.3827474679339";
    } else if (Number(id) === 3) {
      lat = "36.10280020225937";
      lon = "128.3823329267556";
    }

    const response = await axios({
      url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_key}&units=metric`,
      method: "GET",
    });
    if (response) {
      setCelsius(response.data.main.temp)
      setWindspeed(response.data.wind.speed)
      setWeatherIcon(response.data.weather[0].icon);
      setWeatherDescription(response.data.weather[0].description);
    }
  };

  useEffect(() => {
    getWeatherInfo(id);
  }, [id]);

  return (
    <div css={KioskHomeWeatherStyle}>
      <div css={KioskHomeWeatherImg}>
        <img
          css={weatherImg}
          src={`http://openweathermap.org/img/w/${weatherIcon}.png`}
          alt="weatherImage"
        />
        <div css={weatherDescriptionStyle}>{weatherDescription}</div>
      </div>
      <div css={KioskHomeWeatherTextBox}>
        <p className="celsius">
          현재 기온 {Math.round(celsius).toFixed(1)}
          <span>⁰</span>
        </p>
        <p className="windspeed">풍속 : {windspeed}(m/s)</p>
      </div>
    </div>
  );
};

export default KioskWeather;
