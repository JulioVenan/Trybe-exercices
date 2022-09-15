const reducer = (state = 5) => {
  return state;
}


const store = Redux.createStore(reducer);
//first reduce store
const currentState = store.getState() // salvando o valor do state em uma nova variavel

// function func1(params) {
//   // lógica

// return {
// type: "LOGIN",
// payload: {
//                       // dados associados a essa action 
//                               }

//                        }
// } estrutura basica action
                      