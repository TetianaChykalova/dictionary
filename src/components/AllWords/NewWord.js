// import s from './NewWord.module.css'

const NewWord = (props) => {
    return (
        <div>
            <p>
                {props.word} - {props.translate}
            </p>
        </div>
    )
}

export default NewWord;