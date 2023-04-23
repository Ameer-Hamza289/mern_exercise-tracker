import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import Navbar from './Components/Navbar';
import ExercisesList from './Components/ExercisesList';
import EditExercise from './Components/EditExercise';
import CreateExercise from './Components/CreateExercise';
import CreateUser from './Components/CreateUser';

function App() {
  return (
   
    <Router>
       <div className="container">
        <Navbar/>
        <br/>
          <Routes>
          <Route path="/" exact  element={<ExercisesList/>}/>
          <Route path="/update/:id"  element={<EditExercise/>}/>
          <Route path="/create"  element={<CreateExercise/>}/>
          <Route path="/user"  element={<CreateUser/>}/>
          </Routes>
          </div>
    </Router>
    
  );
}

export default App;
