import React, {useState} from 'react';
import './App.css';
import ToDoListItem from "./ToDoListItem";


export default function ToDoList(props) {

    const {todos, onDone, onUndone, onDeleted, newToDoSave} = props

    return (
        <ul className="list-group todo-list">

            {todos.map((el, index) =>
                <ToDoListItem
                    key={el.id}
                    todo={el}
                    onDone={onDone}
                    onUndone={onUndone}
                    onDeleted={onDeleted}
                    newToDoSave={newToDoSave}/>)}
            {/*we went over all the elements with map, and sent it to ToDoListItem to be rendered */}

        </ul>
    );
}



