import React, {useState} from 'react';
import './App.css';


export default function ToDoListItem(props) {

    const [editMode, setIsEditMode] = useState(false)
    const {todo, onDone, onUndone, onDeleted, newToDoSave} = props  // destructuring. To variable to do, we sent it over here


    const isToDoDone = todo.done    // receiving 'to do 'status'
    const toDoText = todo.title     // and 'title' from App.js
    const toDoId = todo.id         // and 'status' from App.js


    const titleStyle = isToDoDone === true ?
        {textDecoration: "line-through", fontWeight: "bold", listStyleType: "none"} : // removes dot's in from of todos in browser
        {listStyleType: "none"}

    const deleteIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-trash" fill="currentColor"
                            xmlns="http://www.w3.org/2000/svg">
        <path
            d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0
                          0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
        <path fillRule="evenodd"
              d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1
                         1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4L4 4.059V13a1 1 0 0 0 1
                            1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
    </svg>

    const editIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-pencil" fill="currentColor"
                          xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
        <path fillRule="evenodd"
              d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
    </svg>
    const doneIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-clipboard-check"
                          fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd"
              d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
        <path fillRule="evenodd"
              d="M9.5 1h-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3zm4.354 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
    </svg>
    const undoneIcon = <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-exclamation"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>
    </svg>

    const [newTodo, setNewTodo] = useState(toDoText)


    const inputHandler = (e) => {
        setNewTodo(e.target.value)
    }

    const saveButtonClick = () => {
        newToDoSave(toDoId, newTodo)
        setIsEditMode(false)
    }

    return (
        <div>

            {editMode ? (
                <div>
                    <li className="list-group-item" style={titleStyle}>
                        <input className="list-group-placeholder"
                               onChange={inputHandler}
                               value={newTodo}        // otherwise it's going to give us old state
                               placeholder={toDoText}/>
                        <button className="btn btn-outline-success btn-sm float-right"
                                onClick={saveButtonClick}>Save
                        </button>
                    </li>
                </div>
            ) : (
                <div>

                    {isToDoDone ? (
                        <li className="list-group-item" style={titleStyle}>

                            {toDoText}
                            <button className="btn btn-outline-success btn-sm float-right"
                                    onClick={() => onDeleted(toDoId)}>{deleteIcon}
                            </button>
                            <button className="btn btn-outline-success btn-sm float-right"
                                    onClick={() => onUndone(toDoId)}>{doneIcon}
                            </button>
                            <button className="btn"
                                    onClick={() => setIsEditMode(true)}>{editIcon}
                            </button>


                        </li>
                    ) : (
                        <li className="list-group-item" style={titleStyle}>
                            {toDoText}
                            <button className="btn btn-outline-success btn-sm float-right"
                                    onClick={() => onDeleted(toDoId)}>{deleteIcon}
                            </button>
                            <button className="btn btn-outline-warning btn-sm float-right"
                                    onClick={() => onDone(toDoId)}>{undoneIcon}
                            </button>
                            <button className="btn "
                                    onClick={() => setIsEditMode(true)}>{editIcon}
                            </button>


                        </li>
                    )}
                </div>
            )}

        </div>
    );
}



