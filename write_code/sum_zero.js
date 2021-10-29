

function addToZero(arr){
    let zeroCount = 0
    for(let i = 0; i < arr.length; i++){
        if(arr[i] == 0){
            zeroCount += 1
        } else if(-1 !== arr.indexOf(-1*arr[i])){
            return true
        }
    }

    if (zeroCount > 1){
        return true
    }

    return false
}

// NOTE that if the array contains two or more zeros it will return as true
// If you don't want this to happen comment out the last if statement in the function
// The time complexity should be linear

array1 = [3, -5, 0, 1, 5, 6, 7]
console.log('array 1')
console.log(addToZero(array1))
array2 = [3, 3, 0, 1, -5, -6, -7]
console.log('array 2')
console.log(addToZero(array2))