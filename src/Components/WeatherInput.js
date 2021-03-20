import React from 'react'
import "./WeatherInput.css"

const WeatherInput = (props) => {
    return (
        <div className="container h-100">
            <div>{props.error ? error() : null}</div>
            <form onSubmit={props.loadData}>
            <div className="row">
                <div className="col-md-3 offset-md-2" >
                    <input type="text" name="city" className="form-control" placeholder="Enter your city name" autoComplete="off"/>
                </div>
                <div className="col-md-3">
                    <input type="text" name="country" className="form-control" placeholder="Enter your country name" autoComplete="off"/>
                </div>
                <div className="col-md-3 py-0 mt-md-0 text-md-left">
                    <button>Get Weather</button>
                </div>
            </div>
            </form>
        </div>
    )
}
const error = () => {
    return (
        <div className="alert alert-danger mx-5" role="alert">
            Please Enter Your City Name and Country Name.
        </div>
    )
}

export default WeatherInput;
