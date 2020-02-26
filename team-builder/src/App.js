import React from 'react';
import Form from './Form';
import './App.css';
import {useState} from 'react';

function App() {
  const [teamMates, setTeamMates] = useState([]);

   
  return (
    <>
    {teamMates.map(teamMate => {
      return(
      <div key={teamMate.name}>
        <h2>{teamMate.name}</h2>
        <h3>{teamMate.email}</h3>
        <h3>{teamMate.role}</h3>
      </div>
    
    )})}
        <Form teamMates = {teamMates} setTeamMates={setTeamMates}/>
        </>
  );
}

export default App;
