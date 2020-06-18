import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';

const Root = () => (
  < Clock />
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(< Root />, document.getElementById('main'));
});
