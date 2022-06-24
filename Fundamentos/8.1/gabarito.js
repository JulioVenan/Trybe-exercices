
const preencherGabarito = (rep1, rep2, rep3, rep4, rep5) => [rep1, rep2, rep3, rep4, rep5,]

const GabaritoCorreção = (callback) => {
 const gabarito = ['a', 'a', 'c', 'd', 'c'];
 const nota = 0;
 for (let i = 0; i < callback.length; i += 1){
   for (let index = 0; index < gabarito.length; index += 1){
     if (callback[i] === gabarito[index]){
       return nota + 1;
     } else if (callback [index] !== gabarito[i] ){
        return nota - 0.5;
     }
   }
 }
 
};
console.log(GabaritoCorreção(preencherGabarito('c', 'a', 'c', 'd', 'c')));
console.log(GabaritoCorreção(preencherGabarito('a', 'a', 'a', 'a', 'a')));