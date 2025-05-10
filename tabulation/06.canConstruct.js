const canConstruct = (tareget, wordbank)=>{
    const table = Array(tareget.length+1).fill(false)
    table[0]=true
    for (let i=0; i<tareget.length+1;i++){
        if (table[i]===true){
            for (let word of wordbank){
                if (tareget.slice(i,i+word.length)===word){
                    table[i+word.length]=true
                }
            }
        }
    }
    return table[tareget.length]
}

console.log(canConstruct("abcdef",["ab","abc","cd","def","abcd"])) // true
console.log(canConstruct("skateboard",["bo","rd","ate","ska","sk","boar"])) //false
console.log(canConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"])) //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e","ee","eee","eeee","eeeee","eeeeee"]
    )) // false


// m = target.length   n= array length
// O(n*m^2) time
// O(m^2) space