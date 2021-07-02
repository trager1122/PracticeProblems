const str="Thomas Arthur Rager";
const strArray=str.split(" ")
let newStr="";
for (i=0; i<strArray.length; i++){
    if (i<strArray.length-1){
        newStr=newStr.concat(strArray[i]+"%20");
    }
    else newStr=newStr.concat(strArray[i]);
}

console.log(newStr);