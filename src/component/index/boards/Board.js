import React from "react";
import './Board.css'
import Ele from "../Ele/Ele";
import Gas from "../Gas/Gas";
import {Card, Col, Row} from "antd";
import Hum from "../Hum/Hum";
import Temp from "../Tem/Temp";


const gridStyle = {
    width: '25%',
    textAlign: 'center',
};
class Board extends React.Component{
    render() {
        return(
            <div className="contact-info">
                <div className="card">
                    <Ele />
                </div>

                <div className="card">
                    <Gas />
                </div>

                <div className="card">
                    <Hum />
                </div>

                <div className="card">
                    <Temp />
                </div>
            </div>
        )
    }
}
export default Board