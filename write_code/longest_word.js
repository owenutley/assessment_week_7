function longestWord(arr){
    let wordLength = 0
    let word = ''
    for(let i = 0; i < arr.length; i++){
        if(arr[i].length > wordLength){
            wordLength = arr[i].length
            word = arr[i]
        }
    }
    console.log(word)
    return wordLength
}

// This function should be linear, we only have one variable being used a single time

let array1 = ["string", "strings", "longestString", "short", "midLength"]
console.log(longestWord(array1))