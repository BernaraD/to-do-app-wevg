import React, {useState} from 'react';
import ToDoCreateForm from './ToDoCreateForm'
import ToDoList from "./ToDoList";
import './App.css';

const initialList = [
    {
        id: 1,
        title: 'Become an amazing developer',
        done: false
    },
    {
        id: 2,
        title: 'Make a dinner',
        done: true
    },
    {
        id: 3,
        title: 'Drink water',
        done: false
    }]


export default function App() {

    const [todos, setTodos] = useState(initialList)

    const create = (title) => {
        const newItem = {
            id: Math.random() * 10,
            title: title,
            done: false
        }
        const updatedTodos = [...todos, newItem]
        setTodos(updatedTodos)
    }


    const onDeleted = (id) => {
        const updatedTodos = todos.filter(el => el.id !== id);
        setTodos(updatedTodos)
    }
    const onDone = (id) => {
        const updatedTodos = todos.map(el => { //going through each element of initial todos
            if (el.id === id) return {...el, done: true}
            else return el;

        })
        setTodos(updatedTodos)
    }


    const onUndone = (id) => {
        const updatedTodos = todos.map(el => {
            if (el.id === id) return {...el, done: false}
            else return el;

        })
        setTodos(updatedTodos)
    }

    const newToDoSave = (id, updatedTitle) => {
        const updatedTodo = [...todos].map(el => {
            if (el.id === id)
                return {...el, title: updatedTitle}
            else return el
        })
        setTodos(updatedTodo);
    }

    // const moveupTodo = (index) => {
    //     const moveUpTodo = [...todos]
    //     const currentElem = moveUpTodo[index];
    //     const previousElem = moveUpTodo[index - 1]
    //     moveUpTodo[index] = previousElem
    //     moveUpTodo[index - 1] = currentElem;
    //     setTodos(moveUpTodo)
    // }


    return (
        <div className="app">
            <h3>To do list</h3>
            <span>{(new Date()).toLocaleTimeString()}</span>;
            <span style={{margin: "8px"}}>{(new Date()).toLocaleDateString()}</span>;


            <ToDoCreateForm create={create}/>

            <ToDoList todos={todos}
                      onDeleted={onDeleted}
                      onDone={onDone}
                      onUndone={onUndone}
                      newToDoSave={newToDoSave}/>
        </div>
    );
}


