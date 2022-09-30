import React from "react";
import s from "./DictionaryLogic.module.css";
import {NavLink} from "react-router-dom";

const DictionaryLogic = (props) => {

    let word = React.createRef();
    let translate = React.createRef();

    let addWordFunc = () => {
        word = word.current.value;
        translate = translate.current.value;
        props.addWord(word, translate);
        word.current.value = '';
        translate.current.value = '';
    }

    return (
        <div className={s.wrapper}>
            <div className={s.main}>
                <h1>
                    Dictionary
                </h1>

                <div className={s.input}>
                    <input type="text" placeholder="enter the word" ref={word}/>
                    <input type="text" placeholder="enter the translate" ref={translate}/>
                </div>
                <div className={s.addBtn}>
                    <button onClick={addWordFunc}>
                        Add
                    </button>
                </div>
            </div>

            <div className={s.button}>
                <NavLink to='/all-words' id="all-words">
                    All words
                </NavLink>

                <NavLink to='/cards' id="show-cards">
                    Show cards
                </NavLink>

                {/*<a href='#' id="repeat">*/}
                {/*    Repeat words*/}
                {/*</a>*/}
            </div>
        </div>
    )
}

export default DictionaryLogic;