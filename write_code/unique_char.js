

function uniqueChar(str){
    str = str.toLowerCase()
    for(let i = 0; i < str.length; i++){
        for(let j = i + 1; j < str.length; j++){
            if(str[i] === str[j]){
                return false
            }
        }
    }
    return true
}

// The time Complexity is exponential. Don't make your string too long

string1 = 'Monday'
string2 = 'Moonday'
console.log(uniqueChar(string1))
console.log(uniqueChar(string2))