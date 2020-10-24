//https://medium.com/better-programming/javascript-iteration-v-s-recursion-and-behind-the-scene-e12fe1756343

function recurse(n){
    if(n===1){
        return 1
    }
    return n * recurse(n-1)
}

// 5*4*3*2*1 = 120
console.log(recurse(5)) // =120


function betterRecurse(n, res){
    if(n===1){
        return res
    }
    return betterRecurse(n-1, n*res)
}

console.log(betterRecurse(5, 1))
console.log(betterRecurse(5, 3)) // (5*4*3*2*1) * 3