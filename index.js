// Code your solution here!
function printString(word){
   
    console.log(word[0])
    if (word.length > 1){
        let substring = word.substring(1,word.length);
        printString(substring);

    }
    else    
        return true
}

function reverseString(word){
    if (word.length > 1){
        let substring = word.substring(0,word.length-1);
        return `${word[word.length-1]}` + `${reverseString(substring)}`;
    }
    else
        return word
}

function isPalindrome(word){
    if (word.length < 2){
        return true
    }
    else if (word[0] === word[word.length - 1]){
        let substring = word.substring(1, word.length-1);
        return isPalindrome(substring)
    }
    else{
        return false
    }
}

function addUpTo(ary, indx){
    if (indx === 0){
        return ary[0]
    }
    else{
        let newArray = ary.slice(1,);
        return ary[0] + addUpTo(newArray, indx - 1)
    }
}

function maxOf(array){
    if (array.length === 1){
        return array[0];
    }
    else{
        return Math.max(array.pop(), maxOf(array))
    }
}

function includesNumber(array, num){
    console.log(num)
    if (array.length < 2){ 
        if (array[0] === num)
            return true
        else
            return false
    }
    else{
        if (array[0] != num){
            return includesNumber(array.slice(1,), num)
        }
        else
            return true
    }   
}
