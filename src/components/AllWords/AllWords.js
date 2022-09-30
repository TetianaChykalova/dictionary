import s from './AllWords.module.css'
import {NavLink} from "react-router-dom";
import BackArrow from '../../img/Back_Arrow.png'
import FirstMes from '../../img/firsr_mes.png'
import NewWord from "./NewWord";

const AllWords = (props) => {

    if (props.allWords.length < 1) {
        return (
            <div className={s.wrapper}>
                <NavLink to='/home' className={s.a}>
                    <img className={s.backArrow} src={BackArrow} alt="back arrow"/>
                    <span>Back to home</span>
                </NavLink>

                <div className={s.firstMes}>
                    <h2>Sorry</h2>
                    <p>you don't have a words</p>
                    <p>
                        you need to go back to the home page and add a word to study
                    </p>
                    <img src={FirstMes} alt="sad smile"/>
                </div>

            </div>
        )
    }

    if ((props.allWords.length > 0)) {
        let newArr = props.allWords
            .map(item => <NewWord word={item.word} translate={item.translate}/>)

        return(
            <div className={s.wrapper}>
                <NavLink to='/home' className={s.a}>
                    <img className={s.backArrow} src={BackArrow} alt="back arrow"/>
                    <span>Back to home</span>
                </NavLink>

                <div className={s.wordsList}>
                    {newArr}
                </div>
            </div>
        )
    }

}

export default AllWords