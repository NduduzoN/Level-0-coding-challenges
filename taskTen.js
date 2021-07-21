function findCommonCharacters(strOne,strTwo){

var array = [];
var unCommonLetter = [];
strOne = strOne.toLowerCase();
strTwo = strTwo.toLowerCase();

for(strOneLeterIndex = 0;strOneLeterIndex < strOne.length ; strOneLeterIndex++){
   for(strTwoLeterIndex = 0;strTwoLeterIndex < strTwo.length;strTwoLeterIndex++){
        if(strOne[strOneLeterIndex] === strTwo[strTwoLeterIndex]) array.push(strOne[strOneLeterIndex]);   
   }
}

var removeDuplicate = new Set(array)
unCommonLetter = Array.from(removeDuplicate);
return console.log("Common letters: " + unCommonLetter);
}