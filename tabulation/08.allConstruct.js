const allConstruct=(target,wordBank)=>{
    const table = Array(target.length+1)
        .fill()
        .map(()=>[]);
    table[0]=[[]]

    for(let i=0; i<=target.length;i++){
        for (let word of wordBank){
            if(target.slice(i,word.length+i)===word){
                const newCombo = table[i].map(subArr=>[...subArr, word])
                for (let combo of newCombo) {
                    table[i + word.length].push(combo);
                }
            }
        }
    }
    return table[target.length]
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
// O(n^m) space