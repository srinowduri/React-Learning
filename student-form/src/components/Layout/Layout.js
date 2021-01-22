import React from 'react';
import Auxi from '../../hoc/Auxi';
import { withRouter } from 'react-router-dom';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
const layout = ( props ) => {
    return (
        <Auxi>
            <Toolbar />
            <main className="content">
                { props.children}
            </main>
        </Auxi> 
    );
};

export default withRouter(layout);