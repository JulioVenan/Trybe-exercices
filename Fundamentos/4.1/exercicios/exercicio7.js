const a = 59
const b = 60 
const c = -10
const d = "string"

function angulos (a, b, c){
    if ((a == 60 || b == 60 || c == 60)){
         console.log("True")
    }else if ((a != 60 || b != 60 || c != 60 )){
        console.log("false")
        
    } else {
        a < 0 || b < 0 || c < 0
        return console.log("Error")
    }
}

console.log(angulos(a))
console.log(angulos(b))
console.log(angulos(c))