import React from 'react';
import { Typography } from 'antd';

const Header = () => {

    return (
        <Typography.Title
            style={{
                marginLeft: '1vw',
                marginTop: 20,
                // background: 'white'
            }}
        >
            Todo list
        </Typography.Title>
    );
}
export default Header;