import React,{useReducer, useState} from "react";
import './App.css';
import TodoItem from "./components/TodoItem"

function App() {

    const [items, dispatch] = useReducer(taskReducer,{todoItems:[
    //const [items, setItems] = useState({todoItems:[
        {
            id: 1,
            isCompleted: true,
            date: '2021-03-08',
            contentText: 'jakiś tekst',
            assignedPerson: 'id: 11'
        },
        {
            id: 2,
            isCompleted: false,
            date: '2021-03-08',
            contentText: 'opis taska',
            assignedPerson: 'id: 22'
        },
        ]})

    function taskReducer(state, action){
        return action.payload;
    }

    function markCompleted(elId){
        const index = items.todoItems.findIndex(el => el.id == elId);
        const newItems = items.todoItems;
        newItems[index].isCompleted = !newItems[index].isCompleted;
        dispatch({type: "COMPLET", payload: {todoItems:newItems}})
    }


    const todoList = items.todoItems.map(i=><TodoItem key={i.id} item={i} markTask={markCompleted}/>)

  return (
    <div className="App">
        {todoList}
    </div>
  );
}

export default App;
