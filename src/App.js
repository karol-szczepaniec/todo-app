import React,{useReducer, useState} from "react";
import './App.css';
import TodoItem from "./components/TodoItem"
import UsersBar from "./components/UsersBar";

function App() {

    const [items, setItems] = useState({
        info:{
          itemsAmount: 2,
          itemsMarked: 1
        },
        todoItems:[
        {
            id: 1,
            isCompleted: false,
            date: '2021-03-08',
            contentText: 'jakiś tekst',
            assignedPerson: 'id: 11',
            isShowing: true
        },
        {
            id: 2,
            isCompleted: true,
            date: '2021-03-08',
            contentText: 'opis taska',
            assignedPerson: 'id: 22',
            isShowing: true
        },
        ]})

    function ListActions(action){

        const index = items.todoItems.findIndex(el => el.id == action.payload.id)
        let newList = items.todoItems.slice();
        let newInfo = items.info;

        switch (action.payload.type){
            case 'ADD':
                let newId = items.todoItems[items.todoItems.length-1].id ?
                    items.todoItems[items.todoItems.length-1].id+1 :
                    items.todoItems.length+1;
                let newItem = {
                    id: newId,
                    isCompleted: false,
                    isShowing: false,
                    date: new Date (Date.now()).toLocaleDateString(),
                    contentText: 'jakiś task do zrobienia',
                    assignedPerson: 'id: 22'
                }
                newList.push(newItem);
                newInfo.itemsAmount ++;
                break;
            case 'REMOVE':

                if(items.todoItems[index].isCompleted){
                    newInfo.itemsMarked --;
                }

                newInfo.itemsAmount --;
                newList = items.todoItems.filter(el => el.id != action.payload.id)
                break;
            case 'MARK':
                newList[index].isCompleted = !items.todoItems[index].isCompleted;
                if(newList[index].isCompleted){
                    newInfo.itemsMarked ++;
                }else{
                    newInfo.itemsMarked --;
                }
                break;
            case 'FILTER':
                if(action.payload.fType == 'marked'){
                    newList.forEach(el => {
                        if(el.isCompleted == true){
                            el.isShowing = true;
                        }else{
                            el.isShowing = false;
                        }
                    })
                }else if(action.payload.fType  == 'unmarked'){
                    newList.forEach(el => {
                        if(el.isCompleted == false){
                            el.isShowing = true;
                        }else{
                            el.isShowing = false;
                        }
                    })
                }else{
                    newList.forEach(el=>{
                        el.isShowing = true;
                    })
                }
                break;
            default:
                return true;
        }

        setItems({info: newInfo, todoItems: newList});
    }



    const todoList = items.todoItems.map(i=>{
        return(
            i.isShowing ? <TodoItem key={i.id} item={i} taskActions={ListActions}/> : null
        )
    })

  return (
    <div className="App">
        <div className="content">

            <div className="left-sidebar">
                <button onClick={(e)=>{
                    e.preventDefault();
                    ListActions({payload:{type: 'ADD',id: 1}})
                }}>Add item</button>
                <div>Power select</div>
                <UsersBar/>
            </div>

            <div className="right-sidebar">

                <div className="header">
                    <button className="button" onClick={(e)=>{
                        e.preventDefault();
                        ListActions({payload:{type: 'FILTER',id: 1, fType: 'all'}})
                    }}>POKAŻ WSZYSTKIE</button>
                    <button className="button" onClick={(e)=>{
                        e.preventDefault();
                        ListActions({payload:{type: 'FILTER',id: 1, fType: 'marked'}})
                    }}>POKAŻ UKOŃCZONE</button>
                    <button className="button" onClick={(e)=>{
                        e.preventDefault();
                        ListActions({payload:{type: 'FILTER',id: 1, fType: 'unmarked'}})
                    }}>POKAŻ NIEUKOŃCZONE</button>
                </div>

                <div className="left-content">

                <div className="left-itembar">
                    {todoList}
                </div>

                <div className="right-summarybar">
                    <div className="summary">
                        <p>PODSUMOWANIE</p>
                        <div>
                            <p>Wszystkie zadania : {items.info.itemsAmount}</p>
                            <p>Ukończone zadania: {items.info.itemsMarked}</p>
                            <p>Nieukończone zadania {items.info.itemsAmount - items.info.itemsMarked}</p>
                        </div>
                    </div>
                </div>

                </div>
            </div>
        </div>
    </div>
  );
}

export default App;
