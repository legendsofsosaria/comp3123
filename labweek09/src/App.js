import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
    const [student, setStudent] = useState({
        name: "Elizabeth House",
        studentID: "Student ID: 101465946",
        college: "George Brown Polytechnic",
        labName: "React JS Programming Week09 Lab Exercise"
    });

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
          <h1>Welcome to Fullstack Development I</h1>
          <StudentInfo studentDetails={student} />
            </header>
        </div>
  );
}

function StudentInfo(props) {
    return (
        <div>
            <h2>{props.studentDetails.labName}</h2>
            <h3>{props.studentDetails.studentID}</h3>
            <h4>{props.studentDetails.name}</h4>
            <h5>{props.studentDetails.college}</h5>
        </div>
    )
}

export default App;
