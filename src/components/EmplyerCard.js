import React from "react";
import Logo from "../logo.svg";
import checkIco from "../svg/check.svg"

export default function EmployerCard(props){

    return(
        <div key={props.item.id} className={props.item.isSelected ? 'employee active' : 'employee'} onClick={(e)=>{
            e.preventDefault();
            props.selectEl(props.item)
        }}>
            <img src={Logo} className="img"/>
            <p>{props.item.name}
            <img className={props.item.isSelected ? "selectedEmp checked" : "none"} src={checkIco}/>
            </p>
        </div>
    )
}