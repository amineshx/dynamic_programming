const gridtravler=(m,n)=>{
    const table = Array(m+1)
        .fill()
        .map(()=>Array(n+1).fill(0));
    
    table[1][1]=1
    for (let i=0 ;i<=m; i++){
        for (let j=0; j<=n;j++){
            const cur = table[i][j]
            if (i<=m-1) table[i+1][j]+=cur
            if (j<=n-1) table[i][j+1]+=cur
        }
    }
    
    
    return table[m][n]
}

console.log(gridtravler(1,1))   //1
console.log(gridtravler(2,3))   //3
console.log(gridtravler(3,2))   //3
console.log(gridtravler(3,3))   //6
console.log(gridtravler(18,18)) //2333606220