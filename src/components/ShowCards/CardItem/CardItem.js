import s from './CardItem.module.css'

const CardItem = (props) => {

    return (
        <div className={s.wrapper}>
            <div>
                <p className={s.word}>
                    {props.word}
                </p>
            </div>
            <div>
                <p className={s.translate}>
                    {props.translate}
                </p>
            </div>
        </div>
    )
}

export default CardItem;