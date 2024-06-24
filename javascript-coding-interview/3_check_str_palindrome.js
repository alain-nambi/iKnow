const isPalindrome = (str) => {
    return str.split('').reverse().join('') === str;
}

console.log(isPalindrome('racecar'));