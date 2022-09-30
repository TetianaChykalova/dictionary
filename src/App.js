import './App.css';
import Dictionary from "./components/Dictionary";
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";
import AllWords from "./components/AllWords/AllWords";
import Cards from "./components/ShowCards/Cards";
import React from "react";

function App(props) {

    return (
        <BrowserRouter>
            <Routes>
                <Route
                    path='/home'
                    element={<Dictionary allWords={props.allWords} addWord={props.addWord} />}
                />
                <Route
                    path='/all-words'
                    element={<AllWords allWords={props.allWords} />}
                />
                <Route
                    path='/cards'
                    element={<Cards allWords={props.allWords} />}
                />
                <Route
                    path="/*"
                    element={<Navigate to="/home" replace />}
                />
            </Routes>
        </BrowserRouter>
  );
}

export default App;
