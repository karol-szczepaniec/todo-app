import React from "react";
import checkIcon from "../svg/checkStatus.svg"
import binIcon from "../svg/bin.svg"
import empIco from "../svg/checkStatus.svg"
import emp2 from "../svg/person2.png"

export default function TodoItem(props){

    return(
        <div className="item">
            <div className="item-left">
                <div className="empName">
                    <img className="img" src={emp2}/>
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
                <img className="icoBin" src={binIcon}
                onClick={(e)=>{
                    e.preventDefault();
                    props.taskActions({payload:{type: 'REMOVE',id: props.item.id}})
                }}/>
            </div>
        </div>
    )
}
