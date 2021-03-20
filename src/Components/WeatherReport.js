import React from 'react'
import "./Weather.css"
const WeatherReport = (props) => {
    return (
        <div className="container text-light">
            {props.css ?
                < div className="Card_css">
            {props.cityName ? (<h1 className="text-white py-1">{props.cityName},{props.countryName}</h1>) : null}
            <h5 className="py-4"><i className={`wi ${props.weatherIcon} display-1`}></i></h5>
            {props.temp_celcius ? (<h1 className="py-2">{props.temp_celcius}&deg;</h1>) : null}
            {
                minMaxTemp(props.temp_min, props.temp_max)
            }
            <h3 className="py-3">{props.description}</h3>
            {props.humidity ? (<h3 className="py-3" style={{ color: "#32a856" }}>Humidity : {props.humidity}&#x25;</h3>) : null}
            {/* <h3 className="py-3">{props.humidity}&#x25;</h3> */}
        </div>
                :
         < div className="Card pt-3">
                {props.cityName ? (<h1 className="text-white py-1">{props.cityName},{props.countryName}</h1>) : null}
                <h5 className="py-4"><i className={`wi ${props.weatherIcon} display-1`}></i></h5>
                {props.temp_celcius ? (<h1 className="py-2">{props.temp_celcius}&deg;</h1>) : null}
                {
                    minMaxTemp(props.temp_min, props.temp_max)
                }
                <h3 className="py-3">{props.description}</h3>
                {props.humidity ? (<h3 className="py-3" style={{ color: "#32a856" }}>Humidity : {props.humidity}&#x25;</h3>) : null}
                {/* <h3 className="py-3">{props.humidity}&#x25;</h3> */}
         </div>
        }
    </div>
    )
}
const minMaxTemp = (min, max) => {
    if (min && max) {
        return (
            <h3>
                <span className="px-4">{min}&deg;</span>
                <span className="px-4">{max}&deg;</span>
            </h3>
        )
    }
   
}

export default WeatherReport;
