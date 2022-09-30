let allWords = [];

export let addWord = (word, translate) => {
    let newWord = {
        word: word,
        translate: translate,
    }
    allWords.push(newWord);
    alert('Excellent! Word added!\n' +
          'Keep learning words to become a pro')
}

export default allWords;
