import React from "react";
import checkIcon from "../svg/checkStatus.svg"
import binIcon from "../svg/bin.svg"
import empIco from "../svg/checkStatus.svg"

export default function TodoItem(props){

    // <div className="item">
    //     id: {props.item.id} <br/>
    //     date: {props.item.date} <br/>
    //     content: {props.item.contentText} <br/>
    //     <p>isCompleted: {props.item.isCompleted ? 'tak' : 'nie'}</p> <br/>
    //     person: {props.item.assignedPerson} <br/>
    //     isShowing: {props.item.isShowing ? 'tak' : 'nie'} <br/>
    //     <br/>
    //
    //     <button onClick={(e)=>{
    //         e.preventDefault();
    //         props.taskActions({payload:{type: 'REMOVE',id: props.item.id}})
    //     }}>Remove</button>
    //
    //     <button onClick={(e)=>{
    //         e.preventDefault();
    //         props.taskActions({payload:{type: 'MARK',id: props.item.id}})
    //     }}>Mark</button>
    // </div>

    return(
        <div className="item">
            <div className="item-left">
                <div className="empName">
                    <img className="empIco" src={empIco}/>
                    <p className="nameField">{props.item.employeeName}</p>
                </div>
                <div className="taskDate">
                    {props.item.date}
                </div>
                <div className="taskContent">{props.item.contentText}</div>
            </div>
            <div className="item-right">
                <img className={ props.item.isCompleted ? "icoBtn checked" : "icoBtn"} src={checkIcon}
                     onClick={(e)=>{
                         e.preventDefault();
                         props.taskActions({payload:{type: 'MARK',id: props.item.id}})
                     }}
                />
                <img className="icoBtn" src={binIcon}
                onClick={(e)=>{
                    e.preventDefault();
                    props.taskActions({payload:{type: 'REMOVE',id: props.item.id}})
                }}/>
            </div>
        </div>
    )
}
