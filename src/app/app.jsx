import React from 'react';
import 'antd/dist/antd.css';

import HeaderFile from './header';
import ContentFile from './content';

const App = () => {

    return (
        <div style={{ width: '70vw', margin: 'auto' }}>
            <HeaderFile />
            <ContentFile />
        </div>
    );
}
export default App;