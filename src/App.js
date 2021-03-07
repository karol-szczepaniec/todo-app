import React,{useReducer, useState} from "react";
import './App.css';
import TodoItem from "./components/TodoItem"

function App() {

    const [items, setItems] = useState({todoItems:[
        {
            id: 1,
            isCompleted: false,
            date: '2021-03-08',
            contentText: 'jakiś tekst',
            assignedPerson: 'id: 11'
        },
        {
            id: 2,
            isCompleted: true,
            date: '2021-03-08',
            contentText: 'opis taska',
            assignedPerson: 'id: 22'
        },
        ]})

    function ListActions(action){

        const index = items.todoItems.findIndex(el => el.id == action.payload.id)
        let newList = items.todoItems.slice();

        switch (action.payload.type){
            case "ADD":
                let newId = items.todoItems[items.todoItems.length-1].id ?
                    items.todoItems[items.todoItems.length-1].id+1 :
                    items.todoItems.length+1;
                let newItem = {
                    id: newId,
                    isCompleted: false,
                    date: new Date (Date.now()).toLocaleDateString(),
                    contentText: 'jakiś task do zrobienia',
                    assignedPerson: 'id: 22'
                }
                newList.push(newItem)
                break;
            case "REMOVE":
                newList = items.todoItems.filter(el => el.id != action.payload.id)
                break;
            case 'MARK':
                newList[index].isCompleted = !items.todoItems[index].isCompleted;
                break;
            default:
                return true;
        }

        setItems({todoItems: newList});
    }



    const todoList = items.todoItems.map(i=><TodoItem key={i.id} item={i} taskActions={ListActions}/>)

  return (
    <div className="App">
        {todoList}
    </div>
  );
}

export default App;
