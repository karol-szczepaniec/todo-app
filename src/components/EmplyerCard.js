import React from "react";
import Logo from "../logo.svg";

export default function EmployerCard(props){

    return(
        <div key={props.item.id} className="employee" onClick={(e)=>{
            e.preventDefault();
            props.selectEl(props.item.id)
        }}>
            <img src={Logo} className="img"/>
            <p>[id: {props.item.id}] {props.item.name} {props.item.isSelected ? <span>checkted</span> : ''}</p>
        </div>
    )
}