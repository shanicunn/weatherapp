import React from 'react';
import axios from 'axios';

const API_URL = "https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid=";
const API_KEY = "ff74cea309cf651b835e1f362b1a5897";

class Thursday extends React.Component {
    constructor() {
        super ()
        this.state = {
            info: [],
        }
    }
   
    async getThursday() {
        try {
            const res = await axios.get(API_URL + API_KEY);
            this.setState({
                info: res.data,
            }) 
        } catch {
                console.log("Error");
            }
        };
    

    componentDidMount() {
        this.getThursday();
    }
    render() {
        return (
            <div>
                {this.getThursday()};
            </div>
    )
    }
    
}
export default Thursday;