let string1="pizza"
let string2="zipza"
const rejectionStatement="These strings are not permutations of one another.";

const lengthCheck=(s1,s2)=>{
    if (s1.length!==s2.length){
        return rejectionStatement + " Their lengths are different.";
    }
}

const permCheck=(s1,s2)=>{
    lengthCheck(s1,s2);
    let filteredString=s2;
    for (i=0; i < s1.length; i++){
        if (s1.includes(s2[i])){
            filteredString=filteredString.replace(s2[i]," ")
        }
        else return rejectionStatement + " A character in one string does not exist in the other."
    }
    return "These words are permutations of one another"
}

console.log(permCheck(string1,string2));