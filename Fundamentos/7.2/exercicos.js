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

const customer = {
  firstName: 'Roberto',
  age: 22,
  job: 'Teacher',
};

const newKeys = (obj, newKey, value) =>{
  let key = newKey
  const val = value
  obj[key] = val
  return console.log(obj)
}
newKeys(customer, ['Favorite Char on D&d'], 'Barbarian')