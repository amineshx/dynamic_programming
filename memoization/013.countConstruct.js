const countConstruct=(target,words)=>{
    if(target==='') return 1
    let res= 0
    for(let word of words){
        if(target.indexOf(word)===0){
            const numWays=countConstruct(target.slice(word.length),words)
            res+=numWays
        }
    }
    return res
}


console.log(countConstruct("purple",["purp","p","ur","le","pupl"])) // 2
console.log(countConstruct("abcdef",["ab","abc","cd","def","abcd"])) // 1
console.log(countConstruct("skateboard",["bo","rd","ate","ska","sk","boar"])) //0
console.log(countConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"])) //4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e","ee","eee","eeee","eeeee","eeeeee"]
    )) // 0



// m = target.length   n= array length
// O(m*n^m) time
// O(m^2) space