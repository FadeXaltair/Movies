import react from 'react';
import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client';

// api key =8c291aac

import App from './App';
const contain =document.getElementById('root');
const root = createRoot(contain);
root.render(<App/>);

// ReactDom.createRoot(<App /> , document.getElementById('root'));