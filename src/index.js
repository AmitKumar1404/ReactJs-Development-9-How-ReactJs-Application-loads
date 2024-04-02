import React from 'react';
import ReactDOM from 'react-dom/client';
// 1. import {someNameImport} from somelocation/somelibrary
// 2. import someDefaultImport from somelocation/somelibrary
import A from './components/A';


const root = ReactDOM.createRoot(document.getElementById('amit'));
root.render(<A name="Virat" surname="Kohli">Data2</A>);
