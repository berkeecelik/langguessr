function concatWords(words) {
    let result = "";
    words.map((word) => {
       result = `${result} ${word}`;
    })
    return result;
}

export { concatWords };