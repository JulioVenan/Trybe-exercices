const sorteio = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min ;
}

const checkWin = (value) => {
  if (value === sorteio(1, 5)){
    return 'Parabéns você ganhou !!!!!!!!!'
  } else {
    return 'Tente Novamente'
  }
  
}
console.log(checkWin(4))