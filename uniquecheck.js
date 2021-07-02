const uniqueCheck=(w)=>{
    for (i=0; i<w.length; i++){
        for (c=i+1; c<w.length; c++){
            if (w[i]===w[c]){
            return " This string does not contain all unique characters as "+ w[c] + " occurs more than once";
            }
        }
    }
    return "This string contains all unique characters";
}

console.log(uniqueCheck("Michelle"));