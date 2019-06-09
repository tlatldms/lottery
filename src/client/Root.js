import React from 'react';
import {BrowserRouter} from 'react-router-dom';
import App from '../App';

const Root = () => {
    return (
        <BrowserRouter
        basename="/lottery">
            <App/>
        </BrowserRouter>
    );
};

export default Root;
