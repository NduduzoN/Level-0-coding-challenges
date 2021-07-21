function findVowels(word){

word = word.toLowerCase();
var array = [];
var matchedVowels;
var regExpressionVowels = /[aeiou]/gi;

if(regExpressionVowels.test(word) != true) return console.log("Word contains no vowels");
matchedVowels = word.match(regExpressionVowels);

var removeDuplicated = new Set(matchedVowels);
array = Array.from(removeDuplicated);
return console.log("Vowels : "+array.join(" "));
}

