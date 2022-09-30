import s from './Cards.module.css'
import BackArrow from "../../img/Back_Arrow.png";
import {NavLink} from "react-router-dom";
import FirstMes from "../../img/firsr_mes.png";
import CardItem from "./CardItem/CardItem";

const Cards = (props) => {
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
        let newCard = props.allWords
            .map(item => <CardItem word={item.word} translate={item.translate}/>)

        return(
            <div className={s.wrapper}>
                <NavLink to='/home' className={s.a}>
                    <img className={s.backArrow} src={BackArrow} alt="back arrow"/>
                    <span>Back to home</span>
                </NavLink>

                <p>
                    click over the card to see the translation
                </p>

                <div className={s.cardsList}>
                    {newCard}
                </div>
            </div>
        )
    }
}

export default Cards;