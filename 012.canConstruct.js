const canConstract=(tareget, wordbank,memo={})=>{
    if (tareget==='') return true
    if (tareget in memo ) return memo[tareget]

    for(word of wordbank){
        if(tareget.indexOf(word)===0){
            const suffix = tareget.slice(word.length)
            if (canConstract(suffix,wordbank,memo)) {
                memo[tareget]=true
                return true
            }
        }
    }
    memo[tareget]=false
    return false
}

console.log(canConstract("abcdef",["ab","abc","cd","def","abcd"])) // true
console.log(canConstract("skateboard",["bo","rd","ate","ska","sk","boar"])) //false
console.log(canConstract("enterapotentpot",["a","p","ent","enter","ot","o","t"])) //true
console.log(canConstract("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e","ee","eee","eeee","eeeee","eeeeee"]
    )) // false


// m = target.length   n= array length
// O(n*m^2) time
// O(m^2) space