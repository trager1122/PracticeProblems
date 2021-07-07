const str="Hadlee"
let reverseStr=""

const isPalindrome=(s)=>{
    for(i=s.length-1; i>=0; i--){
        reverseStr=reverseStr.concat(s[i]);
    }
    console.log(reverseStr)
    if (s==reverseStr){
        return "This string is a palindrome!"
    }
    else return "This string is not a palindrome"
}

console.log(isPalindrome(str))