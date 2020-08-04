import React, {useState} from 'react';
import './App.css';

export default function ToDoCreateForm(props) {

    const [inputValue, setInputValue] = useState('');
    const onCreate = () => {
        props.create(inputValue);
        setInputValue('');
    }
    const inputOnChange = e => setInputValue(e.target.value);

    return (
        <div className="app">

            <input value={inputValue}
                   onChange={inputOnChange}/>
            <button className="btn btn-secondary btn-sm" style={{margin: "8px"}} onClick={onCreate}>Create</button>

        </div>
    );
}

