import React from "react";
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import './Layout.css'
import Indexgroud from "../component/index";
import Time from "../component/index/Time/Time";
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Layoutview extends React.Component{


    state = {
        collapsed: false,
    };

    onCollapse = collapsed => {
        console.log(collapsed);
        this.setState({ collapsed });
    };


    render() {
        return(
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        <Menu.Item key="1">
                            <Icon type="pie-chart" />
                            <span>首頁</span>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', paddingLeft: "50%" , fontSize:32}} >
                        <h1>Lab519</h1>
                    </Header>
                        <Time />
                    <Content style={{ margin: '0 16px' }}>
                        <Breadcrumb style={{ margin: '30px 0' }} />
                                <Indexgroud />
                    </Content>
                </Layout>
            </Layout>
        )
    }
}
export default Layoutview;