let allWords = [];

export let addWord = (word, translate) => {
    if(word.length>0 && translate.length>0) {
        let newWord = {
            word: word,
            translate: translate,
        }
        allWords.push(newWord);
        alert('Excellent! Word added!\n' +
            'Keep learning words to become a pro')
    }
    else {
        alert('You need to enter the word and translation')
    }

}

export default allWords;
