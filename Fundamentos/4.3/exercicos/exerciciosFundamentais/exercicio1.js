let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let result = 0

let maior = 0


//exercicio 1

 for (items of numbers){
     console.log(items)
}
//exercicio2

for(index = 0; index <numbers.length; index += 1){
result += numbers[index]
 }
 console.log(result)


//exercicio3
for(index = 0; index <numbers.length; index += 1){
    result += numbers[index] ;
    media = result/[index + 1]; 

    
    
    }
    console.log(result)
    console.log(media)

//exercico4

for(index = 0; index <numbers.length; index += 1){
    result += numbers[index] ;
    media = result/[index + 1]; 

    if (media > 20){
         console.log(`O valor é maior que 20: ${media}`)
    } else {
        media < 20 
        console.log(`O valor é menor que 20: ${media}`)
    }
    
    }
    
 console.log(media)

//exercicio 5

for(index = 0; index <numbers.length; index += 1){
    if ( numbers[index] > maior ) {
        maior = numbers[index];
     }

}
     
console.log(maior)