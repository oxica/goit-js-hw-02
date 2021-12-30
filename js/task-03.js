const findLongestWord = function (string) {
    
    const result = string.split(' ');
    let longestWord = result[0];
    for (let i = 0; i < result.length; i += 1){
        if (result[i].length < longestWord.length) {
            continue;
        } longestWord = result[i]
    } 
    return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'