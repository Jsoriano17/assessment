import React from 'react';
import { Menu } from 'antd';
import {
    MailOutlined,
    AppstoreOutlined,
} from '@ant-design/icons';
import { Link } from 'react-router-dom';
class Navbar extends React.Component {
    state = {
        current: 'home',
    };

    handleClick = e => {
        console.log('click ', e);
        this.setState({
            current: e.key,
        });
    };

    render() {
        return (
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal">
                <Menu.Item key="home">
                    <Link to='/'>
                        Home
                    </Link>
                </Menu.Item>

                <Menu.Item key="form">
                    <Link to='/form'>
                        Create form
                    </Link>
                </Menu.Item>
            </Menu>
        );
    }
}

export default Navbar