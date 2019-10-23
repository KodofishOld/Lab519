import React from 'react';
import './List.css';
import axios from "axios";
import { Table } from 'antd';


class Listview extends React.Component{
    state = {
        data_loaded: false,
        articles: []
    };

    componentDidMount() {
        setInterval( () => {
            this.getData()
        },5000)
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
        function article(article) {
            return(
                <div key={article.sid}>
                    <h1>{article.sname}</h1>
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
            return(<div>{result}</div>)
        }


        return(

            <div>
                <div className="Lists">
                    <h1>[進入教室人員]</h1>{articleList(this.state.articles)}
                </div>
            </div>

        );
    }

}
export default Listview;
/*{articleList(this.state.articles)}*/

/*{this.number_of_login()}*/


