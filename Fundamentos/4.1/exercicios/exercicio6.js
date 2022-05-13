const a =  0 
const b = 15
const c = -10

function positiveornegative (a, b ,c){
   if ((a > 0 || b > 0 || c > 0)){
       return console.log("Positive")
   } else if ((a < 0 || b < 0 || c < 0)){
       return console.log("Negative")
   } else {
       a == 0 || b == 0 || c == 0 
       return console.log("Zero")
   }
}

console.log(positiveornegative(15))