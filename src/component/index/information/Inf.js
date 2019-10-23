import React from "react";
import './Inf.css'
import axios from "axios";
import {Avatar, Card, Icon} from 'antd';
import { Table, Divider, Tag } from 'antd';


const gridStyle = {

    borderRadius: "30px"
};
class Informations extends React.Component{
    state = {
        data_loaded: false,
        articles: []
    };

    componentDidMount() {
        setInterval( () => {
            this.getData()
        },1000)
    }

    getData() {
        return axios.get('http://120.110.114.14:8000/online/')
            .then(res => {
                this.setState({
                    articles: res.data,
                    data_loaded : true
                });
                console.log(res.data)
            })
    }


    render(){

        function article(article){
            const column = [
                {
                    title:'Sid',
                    dataIndex:'sid',
                    key:'sid'
                },
                {
                    title:'Sname',
                    dataIndex: 'sname',
                    key: 'sname'
                },
                {
                    title:'Department',
                    dataIndex: 'department',
                    key: 'department'
                },
            ];
            function toMessage() {
                window.location.href = `http://120.110.114.14:8000/logout/${article.sid}`;
            }
            return(

                <div className="cardes " style={{margin:50,float:"left"}}>
                    <Card style={{borderRadius: "30px",backgroundColor:"#636e72"}}>
                        <div className="top-section">
                            <div className="info-sectiones">
                                <h1>個人資訊</h1>
                                <h1><Icon type="logout" onClick={toMessage}/></h1>
                                <h2>
                                    <table key={article.sid}>
                                        <tr>
                                            <th>uid:</th>
                                            <th>{article.sid}</th>
                                        </tr>
                                        <tr>
                                            <th>Id:</th>
                                            <th>{article.sname}</th>
                                        </tr>
                                        <tr>
                                            <th>Department:</th>
                                            <th>{article.department}</th>
                                        </tr>
                                    </table>
                                </h2>
                            </div>
                        </div>
                    </Card>

                </div>
            )


        }

        function articleList(articles) {
            if(articles.length === 0){
                return ("empty");
            }
            const result = [];
            articles.forEach((item) => {
                result.push(article(item));
            });
            return(<td>{result}</td>)
        }
        return(
            <div>
                {articleList(this.state.articles)}
            </div>

        );
    }

}
export default Informations

/*<Table dataSource={this.state.articles} columns={column} style={this.tableStyle}/>*/

/*{articleList(this.state.articles)}*/