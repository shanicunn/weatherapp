import React from 'react';
import axios from 'axios';

const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat=33.7490000&lon=-84.3879800&&units=imperial&exclude=current,minutely,hourly&appid=";
const API_KEY = "ff74cea309cf651b835e1f362b1a5897";
// a354bca95e91a18ffc828debd1b4dd63
let dayOfWeek = "";

// Finding current date to display with forecast
let date = new Date();
let dateString = String(date);
let dateSplit = dateString.split(" ");
dayOfWeek = dateSplit[0];
console.log(dateString);
console.log(dayOfWeek);

class Home extends React.Component {
    constructor(props) {
        super (props)
        this.state = {
            info: [],
        }
    }
   
    async get7Day() {
        try {
            const res = await axios.get(API_URL + API_KEY);
            this.setState({
                info: res.data.daily,
            }) 
        } catch {
                console.log("Error");
            }
        };
    

    componentDidMount() {
        this.get7Day();
        
    }
    render() {
        return (
            <div className="section">
               {this.state.info.map(forecast => {
                   {/* console.log(forecast); */}
                   {/* console.log(forecast.weather[0]) */}
                   return (
                       <div className="forecast">
                            <h1>{dayOfWeek}</h1>
                            <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}@2x.png`} alt=""></img>
                            <h3>{forecast.weather[0].description}</h3>
                            <h2>{forecast.temp.min} | {forecast.temp.max}</h2>
                       </div>
                   )
               })}
            </div>
    )
    }
    
}
export default Home;