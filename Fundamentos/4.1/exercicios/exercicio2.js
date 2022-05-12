


const nota = function (nota) {

    if ((nota == 80) || (nota > 80)) {
        return console.log('Aprovado')


    } else if ((nota < 79) || (nota > 59)) {
        return console.log('Lista de espera')

    } else {
        (nota < 60)
        return console.log('reprovado')
    }

 }

 console.log(nota(58))