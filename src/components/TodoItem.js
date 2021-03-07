import React from "react";

export default function TodoItem(props){

    return(
        <div className="item">
            id: {props.item.id} <br/>
            date: {props.item.date} <br/>
            content: {props.item.contentText} <br/>
            <p>isCompleted: {props.item.isCompleted ? 'tak' : 'nie'}</p> <br/>
            person: {props.item.assignedPerson} <br/>
            isShowing: {props.item.isShowing ? 'tak' : 'nie'} <br/>
            <br/>

            <button onClick={(e)=>{
                e.preventDefault();
                props.taskActions({payload:{type: 'REMOVE',id: props.item.id}})
            }}>Remove</button>

            <button onClick={(e)=>{
                e.preventDefault();
                props.taskActions({payload:{type: 'MARK',id: props.item.id}})
            }}>Mark</button>
        </div>
    )
}
