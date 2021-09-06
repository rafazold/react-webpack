import React from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App.jsx';

const root = document.createElement('div');
root.classList.add(
  'bg-card-white',
  'min-h-screen',
  'box-border',
  'font-primary'
);
document.body.appendChild(root);

render(<App />, root);
