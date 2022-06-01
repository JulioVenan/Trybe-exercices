function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  
  // Escreva seu código abaixo.
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  
  function dezemberDays(){
    // const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

    let ul = document.getElementById("days")
       
    for(let i = 0; i < dezDaysList.length; i += 1){
      let day = document.createElement('li')
      day.classList.add("day")
      day.innerText = dezDaysList[i]
       if(dezDaysList[i] === 24 || dezDaysList[i] === 25 || dezDaysList[i] === 31)  day.classList.add("holyday")
       if(dezDaysList[i] === 4 || dezDaysList[i] === 11 || dezDaysList[i] === 18 || dezDaysList[i] === 25) day.id = "sexta"
      ul.appendChild(day)
     
    }

     
  }
  dezemberDays();

  function buttonHoly(){
    
    let feriados = "Feriados"

    let ulb = document.querySelector(".buttons-container")

    let button = document.createElement('button')
    button.id = "btn-holiday"
    button.textContent = feriados
    ulb.appendChild(button)
    
  }
  buttonHoly()

  function colorHolyday(){
     let cor = document.querySelectorAll(".holyday")
     for(let i = 0; i< cor.length; i += 1){
       if(cor[i].style.color === ""){
         cor[i].style.color = "rgb(50, 205, 50)"
       }else {
         cor[i].style.color = "rgb(102, 102, 102)"
       }
     }
     
  }
   let clickB = document.getElementById("btn-holiday")
   clickB.addEventListener("click", colorHolyday)

   function buttonfriday(){
    let friday = "Sexta-feira"
    let ulc = document.querySelector(".buttons-container")
  
    let buttonfri = document.createElement("button")
    buttonfri.id = 'btn-friday'
    buttonfri.textContent = friday
    ulc.appendChild(buttonfri)
   }
   buttonfriday()
   
   function sextou(){
     let sexta = document.querySelectorAll("#sexta")
     let days = [4 ,11, 18, 25]
      for(let i = 0; i < sexta.length; i ++){
          if(sexta[i].textContent === '4' || sexta[i].innerText === '11' || sexta[i].innerText === '18' || sexta[i].innerText === '25') {
            sexta[i].textContent = "SEXTOOU"
          } else {
            for(let index = 0; index < days.length; index ++){
              days[3].textContent = 'teste'
            }
          }
        }
      }
    let clickS = document.querySelector("#btn-friday")
    clickS.addEventListener("click", sextou)

  



  

  

