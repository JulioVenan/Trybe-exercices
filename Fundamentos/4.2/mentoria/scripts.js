// let maria = 40
// let Iza = 50
// let Silvia = 32

// function MaisJovem(maria, Iza, Silvia) {
//     if (maria < Iza && maria < Silvia) {
//         return console.log("maria é a pessoa mais jovem e possui " + maria + "anos de idade")
//     } else if (Iza < maria && Iza < Silvia) {
//         return console.log("Iza é a pessoa mais jovem e possui " + Iza + "anos de idade")
//     } else if (Silvia < maria && Silvia < Iza) {
//         return console.log("Silvia é a pessoa mais jovem e possui " + Silvia + "anos de idade")
//     }
// }

// console.log(MaisJovem(maria, Iza, Silvia))


// //2. Taxa Metabólica Basal

// //Ana Laura é uma nutricionista e quer disponibilizar uma calculadora de BMR (Taxa Metabólica Basal)
//  //em seu site, vamos ajudá-la escrevendo um algoritmo.

// //Ele recebe os seguintes dados:
//  //- age: número maior que 0
//  //- sex: M ou F
//  //- weight: Em (kg) com número maior que 0
//  - height: Em (cm) com número maior que 0

// A fórmula para homens:
//  - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) + 5

// A fórmula para mulheres:
//  - (altura em centímetros x 6,25) + (peso em quilogramas x 9,99) – (idade x 4,92) – 161

// Imprima no terminal o resultado do cálculo no formato:
// -----------------------------------
// "A taxa metabólica basal é: x Kcal"
//-----------------------------------


let sex = "M"
let age = 21
let weight = 80
let height = 174
const taxaM = (height * 6.25) + (weight * 9.99) - (age * 4.92) + 5
const taxaF = (height * 6.25) + (weight * 9.99) - (age * 4.92) - 161


function tmb(sex) {

   
    if (sex === "M") {
        return console.log(`à taxa metabólica basal é ${taxaM}`)


    } else if (sex === "F") {
        return console.log(`a taxa metabólica basal é ${taxaF}`)

    } else {
        sex !== "M" || "F" 
        return console.log("Invalid Sex")
    }
}



tmb("M")
tmb("F")


