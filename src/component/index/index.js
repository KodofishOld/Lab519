import React from "react";
import {Card, Carousel, Col, Row} from 'antd';
import './index.css'
import Board from "./boards/Board";
import Informations from "./information/Inf";
import Listview from "./List/List";
import Log from "./Log/Log";

const background = require('./image/01-1.png');
const background2 = require('./image/02-1.png');
const background3 = require('./image/06-1.png');
const background4 = require('./image/06-2.png');
class Indexgroud extends React.Component{
    render() {
        return(
            <div>
                <div className="Carousel">
                    <Carousel autoplay >
                        <div>
                            <img src={background} />
                        </div>
                        <div>
                            <img src={background2} />
                        </div>
                        <div>
                            <img src={background3} />
                        </div>
                        <div>
                            <img src={background4} />
                        </div>
                    </Carousel>
                </div>
                <div>
                    <Row >
                        <Col span={6} push={18} className="Col1">
                            <Listview />
                        </Col>
                        <Col span={18} pull={6} className="Col2">
                            <div className="lay1">
                                    <Log />
                            </div>
                            <div className="lay1">
                                <Board />
                            </div>
                            <div className="lay2">
                                <h1>
                                    <Informations />
                                </h1>
                            </div>
                            <div className="information">

                            </div>
                        </Col>
                    </Row>

                </div>
            </div>
        )
    }
}
export default Indexgroud;