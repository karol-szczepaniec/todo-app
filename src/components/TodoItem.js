import React from "react";

export default function TodoItem(props){
    return(
        <div className="item">
            id: {props.item.id} <br/>
            date: {props.item.date} <br/>
            content: {props.item.contentText} <br/>
            <p>isCompleted: {props.item.isCompleted ? 'tak' : 'nie'}</p> <br/>
            person: {props.item.assignedPerson} <br/>
            <br/>
            <button onClick={(e)=>{
                e.preventDefault();
                props.markTask(props.item.id)
            }}>MarkCompleted</button>
        </div>
    )
}
