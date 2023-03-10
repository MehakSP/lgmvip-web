import React , { useState } from "react";

export default function TodoForm (props) {
    //State
    const [input, setInput] = useState("");
    
    
    const handlechange = e => {
        setInput(e.target.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        props.addTask({
            id: Math.floor(Math.random() * 1000000),
            text: input,
            isComplete: false
        })
        setInput('')
    }
    
    return (
        <form className="todo-form">
            <input type="text" placeholder="Add a todo" onChange={handlechange} className="todo-input" value={input} name="text" />
            <button type="submit" onClick={handleSubmit} className="todo-submit-button">ADD TODO</button>
        </form>
    );  
}