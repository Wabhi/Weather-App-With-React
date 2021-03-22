import React, { Component } from 'react'
import WeatherReport from "./Components/WeatherReport";
import WeatherInput from "./Components/WeatherInput";
import './App.css';
import "weather-icons/css/weather-icons.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


const APIkey= "c003aa64b9a766de1448e7ce1f6e1a63"
class App extends Component {
  //here defined the state whatever we need..................
  constructor() {
    super()
    this.state = {
      cityName:null,
      countryName: null,
      icon: null,
      main: null,
      celsius: null,
      temp_max: null,
      temp_min: null,
      description: "",
      humidity:null,
      error: false,
      css:false
     
    }
    //here i defined wether icon state...........................
    this.weatherIcon = {
      Thunderstrom: "wi-thunderstrom",
      Drizzle: "wi-sleet",
      Rain: "wi-strom-showers",
      Snow: "wi-snow",
      Atmosphere: "wi-fog",
      Clear: "wi-day-sunny",
      Clouds:"wi-day-fog"
      
    }
  }
  //here I covert temp from kelvin to celcius......................
  convertCelcius = (temp)=>{
    let celsius = Math.floor(temp - 273.15)
    return celsius
  }
  //here I convert icon based on weather condition.........................
  convertIcon = (icons, idRange) => {
    switch (true) {
      case idRange >= 200 && idRange <= 232:
        this.setState({
          icon:icons.Thunderstrom
        })
        break
      case idRange >= 300 && idRange <= 321:
        this.setState({
          icon:icons.Drizzle
        })
        break
      case idRange >= 500 && idRange <= 531:
        this.setState({
          icon:icons.Rain
         })
        break
      case idRange >= 600 && idRange <= 622:
        this.setState({
          icon:icons.Snow
        })
        break
      case idRange >= 701 && idRange <= 781:
        this.setState({
          icon:icons.Atmosphere
        })
        break
      case idRange >= 801 && idRange <= 804:
        this.setState({
          icon:icons.Clouds
        })
        break
      case idRange ===800:
        this.setState({
          icon:icons.Clear
        })
        break
      default:
        this.setState({
          icon:icons.Clear
        })
    }
  }
  //fetching data by api call.................
  fetchApi = async (event) => {
    event.preventDefault();
    const city = event.target.elements.city.value
    const country = event.target.elements.country.value
    //console.log(city)
    //console.log(country)
    if (city && country) {
      const api_call = await axios(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${APIkey}`)
      const response = api_call.data
      console.log(response)
      this.setState({
        cityName: `${response.name}`,
        countryName: `${response.sys.country}`,
        celsius: this.convertCelcius(response.main.temp),
        temp_min: this.convertCelcius(response.main.temp_min),
        temp_max: this.convertCelcius(response.main.temp_max),
        description: response.weather[0].description,
        humidity:response.main.humidity,
        error: false,
        css:true
      })
      this.convertIcon(this.weatherIcon,response.weather[0].id)
    } else {
      this.setState({error:true})
    }
    }
   
  //rendering whole ui parts from here..................
  render() {
    return (
      <div className="App">
        <WeatherInput loadData={this.fetchApi} error={this.state.error}/>
        <WeatherReport
          cityName={this.state.cityName}
          countryName={this.state.countryName}
          temp_celcius={this.state.celsius} temp_min={this.state.temp_min}
          temp_max={this.state.temp_max} description={this.state.description}
          weatherIcon={this.state.icon} humidity={this.state.humidity}
          css={this.state.css}
        />
      </div>
    )
  }
 }
export default App;

