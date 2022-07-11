import React, { useState, useEffect } from "react";
import "./styles.css";
import Draggable from 'react-draggable';

export default () => {
    const [counter, setCounter] = useState(0)
    const [components, setComponents] = useState([])

    const Navbar = () => {
        return (
            <div class="topnav">
                <a class="active" href="#home">FastCode</a>
                <a href="#news">News</a>
                <a href="#contact">Contact</a>
                <a href="#about">About</a>
            </div> 
        )
    }

    const Leftbar = () => {
        return (
            <div class="leftbar">
                <button onClick={() => addComponent()}>Add component</button>
            </div> 
        )
    }

    const addComponent = () => {
        let componentList = components
        componentList.push((
            <Draggable key={counter} onStop={onDragStop}>
                <div className="component-container">
                    <p>Component {counter}</p>
                </div>
            </Draggable>
        ))
        setCounter(counter + 1)
        setComponents(componentList)
        console.log("Spawning new component " + counter)
    }

    const onDragStop = (pos) => {
        console.log(pos)
    }

    return (
        <div>
            <Navbar/>
            <Leftbar/>
            <div className="view">
                <div className="panel-tools"></div>
                <div className="panel-board"></div>
                {[...components]}
            </div>
        </div>
    );
}