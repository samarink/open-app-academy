import React from 'react';
import ReactDOM from 'react-dom';
import Clock from './clock';
import Tabs from './tabs';

const tabs = [
  {title: 'one', content: 'I am the first'},
  {title: 'two', content: 'Second pane here'},
  {title: 'three', content: 'Third pane here'}
];

const Root = () => (
  <div>
    < Clock />
    < Tabs panes={tabs} />
  </div>
);

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(< Root />, document.getElementById('main'));
});
