import React from 'react';
import axios from 'axios';

const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.7490000&lon=-84.3879800&&units=imperial&exclude=current,minutely&appid=";
const API_KEY = "ff74cea309cf651b835e1f362b1a5897";


class Sunday extends React.Component {
    constructor() {
        super ()
        this.state = {
            info: [],
        }
    }
    militaryTime (time) {
        let dt = new Date(time * 1000);
        let hr = dt.getHours();
        let m = "0" + dt.getMinutes();
        let newTime = hr + ":" + m.substr(-2);
        return newTime;
    }

    async getSunday() {
        try {
            const res = await axios.get(API_URL + API_KEY);
            this.setState({
                info: res.data.hourly,
            }) 
        } catch {
                console.log("Error");
            }
        };
    

    componentDidMount() {
        this.getSunday();
    }
    render() {
        return (
            <div>
                 {this.state.info.map(forecast => {
                    {/* console.log(forecast); */}
                    return (
                        <div className="forecast">
                        <h1>{this.militaryTime(forecast.dt)}</h1>
                        <h1>{forecast.temp}</h1>
                        <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt=""></img>
                        <h3>{forecast.weather[0].description}</h3>
                        </div>
                    )
                })}
            </div>
    )
    }
    
}
export default Sunday;