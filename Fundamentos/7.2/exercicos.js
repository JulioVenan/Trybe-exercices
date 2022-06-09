// const verifyIsNumber = (value1, value2) => {
//   if (typeof value1 !== 'number' || typeof value2 !== 'number') {
//     throw new Error('Os valores devem ser numéricos');
//   }
// };

// const sum = (value1, value2) => {
//   try {
//     verifyIsNumber(value1, value2);
//     return value1 + value2;
//   } catch (error) {
//     return error.message;
//   }
// };

// console.log(sum(2, '3'));

// const customer = {
//   firstName: 'Roberto',
//   age: 22,
//   job: 'Teacher',
// };

// const newKeys = (obj, newKey, value) =>{
//   let key = newKey
//   const val = value
//   obj[key] = val
//   return console.log(obj)
// }
// newKeys(customer, ['Favorite Char on D&d'], 'Barbarian')

// const student1 = {
//   Html: 'Muito Bom',
//   Css: 'Bom',
//   JavaScript: 'Ótimo',
//   SoftSkills: 'Ótimo',
// };

// const student2 = {
//   Html: 'Bom',
//   Css: 'Ótimo',
//   JavaScript: 'Omaior',
//   SoftSkills: 'Ótimo',
//   Git: 'Bom', // chave adicionada
// };

// const listSkills = (student) => {
//   const arrayOfSkills = Object.keys(student);
//   for (const index in arrayOfSkills) {
//     console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
//   }
// };

// console.log('Estudante 1');
// listSkills(student1);

// console.log('Estudante 2');
// listSkills(student2);

// const países = {
//   França: 'Paris',
//   Brasil: 'Brasília',
//   Espanha: 'Madrid',
//   Portugal: 'Lisboa',
// };
// const pairKeyValue = Object.entries(países);
// console.log(pairKeyValue);
// for(index in pairKeyValue) {
//   console.log('--------');
//   console.log('País:', pairKeyValue[index][0]);
//   console.log('Capital:', pairKeyValue[index][1]);
// };

// const person = {
//   name: 'Alberto',
//   lastName: 'Gomes',
//   age: 20,
// };

// const info = {
//   age: 23,
//   job: 'engenheiro',
// };

// const family = {
//   children: ['Maria', 'João'],
//   wife: 'Ana',
// };

// Object.assign(person, info, family)
// console.log(person)

/* Output
  { name: 'Alberto',
  lastName: 'Gomes',
  age: 23,
  job: 'engenheiro',
  children: [ 'Maria', 'João' ],
  wife: 'Ana'
  } */

  const getDayName = (number) => {
    const dayNumber = number - 1;
    const days = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado'];
    return days[dayNumber];
  };
  
  const printDayname = (dayNumber) => {
    console.log(getDayName(dayNumber));
  };
 printDayname(4)