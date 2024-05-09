const wordSearch = (letters, word) => {
 const horizontalJoin = letters.map(ls => ls.join(''));

    let horizontal = letters[0].length;
    let vertical = letters.length;
    //Looping through the array to check whether letter is present in word
    //Returns true if present and false if not
    for (let i = 0; i < horizontal; i++) {
        let temp = [];
        for (let j = 0; j < vertical; j++) {
            temp.push(letters[j][i]);
            if (temp.includes(word)) return true;
        }

    }
    
    //Looping through array
    for (let l of horizontalJoin) {
        if (l.includes(word)) return true;
    }

    return false;
};

module.exports = wordSearch;
