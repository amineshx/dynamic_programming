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










console.log(allConstruct("purple",["purp","p","ur","le","pupl"])) 
// [ 
//     [ 'purp', 'le' ], 
//     [ 'p', 'ur', 'p', 'le' ] 
// ]
console.log(allConstruct("abcdef",["ab","abc","cd","def","abcd","ef","c"]))
// [
//     [ 'ab', 'cd', 'ef' ],
//     [ 'ab', 'c', 'def' ],
//     [ 'abc', 'def' ],
//     [ 'abcd', 'ef' ]
// ]
  
console.log(allConstruct("skateboard",["bo","rd","ate","ska","sk","boar"])) 
//[]


console.log(allConstruct("enterapotentpot",["a","p","ent","enter","ot","o","t"])) 
// [
//     [ 'enter', 'a', 'p', 'ot', 'ent', 'p', 'ot' ],
//     [
//       'enter', 'a',
//       'p',     'ot',
//       'ent',   'p',
//       'o',     't'
//     ],
//     [
//       'enter', 'a',
//       'p',     'o',
//       't',     'ent',
//       'p',     'ot'
//     ],
//     [
//       'enter', 'a',
//       'p',     'o',
//       't',     'ent',
//       'p',     'o',
//       't'
//     ]
//   ]
console.log(allConstruct("eeeeeeeeeeeeeeeeeeeeeeef",
        ["e","ee","eee","eeee","eeeee"]
    )) // []


// m = target.length   n= array length
// O(n^m) time
// O(m) space