const peoples = (firstname, lastname) => {
  const people = {
    NomeCompleto: firstname + lastname ,
    email: `${firstname}_${lastname}_@trybe.com`
  }
  return people
};
  
const newEmployees = () => {
  const employees = {
    id1: peoples('Pedro', 'Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: peoples('Luiza', 'Drumond'),  // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: peoples('Carla', 'Paiva'),  // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
}
console.log(newEmployees())