const canConstract=(tareget, wordbank)=>{
    if (tareget==='') return true

    for(word of wordbank){
        if(tareget.indexOf(word)===0){
            const suffix = tareget.slice(word.length)
            if (canConstract(suffix,wordbank)) return true
        }
    }
    return false
}

console.log(canConstract("abcdef",["ab","abc","cd","def","abcd"])) // true
console.log(canConstract("skateboard",["bo","rd","ate","ska","sk","boar"])) //false
console.log(canConstract("enterapotentpot",["a","p","ent","enter","ot","o","t"])) //true
console.log(canConstract("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e","ee","eee","eeee","eeeee","eeeeee"]
    )) // false


// m = target.length   n= array length
// O(m*n^m) time
// O(m^2) space