import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import allWords from "./state";
import {addWord} from "./state";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App
            allWords={allWords}
            addWord={addWord}
        />
    </React.StrictMode>
);