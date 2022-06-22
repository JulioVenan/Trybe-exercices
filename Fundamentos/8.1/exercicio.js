// Ao chamar a função doingThings:
const wakeUp = () => 'Acordando!!'
const breakfast = () => 'Bora tomar café!!'
const sleeping = () => 'Partiu dormir!!'
const doingThings = (func) => func();

// Ela deve retornar o valor do respectivo parâmetro, neste caso:
// Acordando!!,
console.log(doingThings(wakeUp))
console.log(doingThings(breakfast))
console.log(doingThings(sleeping))