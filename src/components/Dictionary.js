import React from "react";
import DictionaryLogic from "./DictionaryComponents/DictionaryLogic";

const Dictionary = (props) => {
    return (
        <div>
            <DictionaryLogic
                allWords={props.allWords}
                addWord={props.addWord}
            />
        </div>
    )
}

export default Dictionary;