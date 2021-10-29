

function pangram(str){
    str = str.toLowerCase()
    if (str.indexOf('a') == -1|| 
    str.indexOf('b') == -1 ||
    str.indexOf('c') == -1 ||
    str.indexOf('d') == -1 ||
    str.indexOf('e') == -1 ||
    str.indexOf('f') == -1 ||
    str.indexOf('g') == -1 ||
    str.indexOf('h') == -1 ||
    str.indexOf('i') == -1 ||
    str.indexOf('j') == -1 ||
    str.indexOf('k') == -1 ||
    str.indexOf('l') == -1 ||
    str.indexOf('m') == -1 ||
    str.indexOf('n') == -1 ||
    str.indexOf('o') == -1 ||
    str.indexOf('p') == -1 ||
    str.indexOf('q') == -1 ||
    str.indexOf('r') == -1 ||
    str.indexOf('s') == -1 ||
    str.indexOf('t') == -1 ||
    str.indexOf('u') == -1 ||
    str.indexOf('v') == -1 ||
    str.indexOf('w') == -1 ||
    str.indexOf('x') == -1 ||
    str.indexOf('y') == -1 ||
    str.indexOf('z') == -1){
        return false
    }
    
    return true
}

//The time complexity of thid function should be linear

console.log(pangram("The quick brown fox jumps over lazy dogs"))
console.log(pangram("failed attempt"))