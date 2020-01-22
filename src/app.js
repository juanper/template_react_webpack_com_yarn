import React from 'react';
import ReactDOM from 'react-dom';
import logo from './images/logo.svg';
import logo512 from './images/logo512.png';
import './style/app.css';

const template = 
<div>
        <img src={logo}></img>
        <img src={logo512}></img>
        <p>Hello x oi from react</p>
</div>;

ReactDOM.render(template, document.getElementById('root'));
