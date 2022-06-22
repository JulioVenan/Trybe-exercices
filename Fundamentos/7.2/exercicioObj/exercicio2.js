// function sum() {
//   const result = parseInt(value1) + parseInt(value2);
//   document.getElementById('value1').value = '';
//   document.getElementById('value2').value = '';
//   if(value1 === '' || value2 === ''){
//     throw new Error('Insira os 2 valores');
//   }
// }
// window.onload = () => {
//   const button = document.getElementById('button');
//   button.addEventListener('click', sum);
// }
function validation(value1, value2){
  if(value1 === '' || value2 === ''){
    throw new Error('insira os valores ')
  }  else if (typeof value1 !== 'number' || typeof value2 !== 'number' ) {
    throw new Error('Os valores devem ser numéricos');
} 
}

const sum = (val1, val2) => {
  
  const result = val1 + val2;
  const exibirResultado = () => document.getElementById('result').textContent = `Resultado: ${result}`;
  try {
    const val1 = document.getElementById('value1').value;
    const val2 = document.getElementById('value2').value;
    validation(val1, val2);
    const result = val1 + val2;
    exibirResultado()
  } catch (error) {
    alert(error.message)
  }
    };

  const button = document.getElementById('button');
   button.addEventListener('click', sum);