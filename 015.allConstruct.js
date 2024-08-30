const allConstruct=(target,wordBank)=>{
    if (target==='') return [[]]

    const res=[]
    for (let word of wordBank){
        if(target.indexOf(word)==0){
            const suffix= target.slice(word.length)
            const suffixWays= allConstruct(suffix,wordBank)
            const taregetWays= suffixWays.map(way=>[word,...way])
            res.push(...taregetWays)
        }
    }
    return res
}










console.log(allConstruct("purple",["purp","p","ur","le","pupl"])) // 2
console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"])) // 1
console.log(allConstruct("skateboard",["bo","rd","ate","ska","sk","boar"])) //0
console.log(allConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"])) //4
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef",
        ["e","ee","eee","eeee","eeeee","eeeeee"]
    )) // 0
