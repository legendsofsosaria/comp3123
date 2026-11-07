"use client";
import React from 'react'

export default function Student() {

    let fullName = "John Doe";
    let age = 20;

    let buttonClicked = () => alert("Button clicked!");

    return (
        <div>
            <h3>Student Information</h3>
            <h4>Name: {fullName}</h4>
            <h4>Age: {age}</h4>
            <button onClick={() => console.log("Button clicked!")}>Click Me</button>
            <button onClick={buttonClicked}>Alert</button>
        </div>
    );
}
