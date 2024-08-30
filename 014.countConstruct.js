const countConstruct=(target,words, memo={})=>{
    if(target==='') return 1
    if(target in memo) return memo[target]

    let res= 0
    for(let word of words){
        if(target.indexOf(word)===0){
            const numWays=countConstruct(target.slice(word.length),words,memo)
            res+=numWays
        }
    }
    memo[target]=res
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
// O(n*m^2) time
// O(m^2) space