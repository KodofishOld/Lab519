import React from "react";
import './Time.css'

class Time extends React.Component{
    state = {
        curTime: null,
    };



    componentDidMount()
    {
        setInterval( () => {
            this.setState({
                curTime : new Date().toLocaleString()
            })
        },1000)
    }

    render() {
        return(
            <div className="time">
                <h1>{this.state.curTime}</h1>
            </div>
        )
    }
}
export  default Time;