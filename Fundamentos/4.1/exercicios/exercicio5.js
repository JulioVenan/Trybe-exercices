const a = 11
const b = 12
const c = 13

function compare (a, b, c){
    if (a > b && a > c) {
        return console.log("A é maior")
    } else if (b > a && b > c){
        return console.log("B é maior")
    } else if (c > b && c > a ){
        return console.log("C é maior")
    } 
 }
 console.log(compare(a, b, c))