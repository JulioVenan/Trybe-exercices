import React from 'react';
import './App.css';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}
const tarefas =  ['Acordar', 'Cardiozinho', 'Tomar Café', 'Trybe',  'Treininho'];

class App extends React.Component{
  render() {
    return(
      <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    )
  }
}

export default App;
