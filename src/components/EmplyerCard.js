import React from "react";
import Logo from "../logo.svg";
import checkIco from "../svg/check.svg"
import emp2 from "../svg/person2.png"

export default function EmployerCard(props){

    return(
        <div key={props.item.id} className={props.item.isSelected ? 'employee active' : 'employee'} onClick={(e)=>{
            e.preventDefault();
            props.selectEl(props.item)
        }}>
            <img src={emp2} className="img"/>
            <p className="empNames">{props.item.name}
            <img className={props.item.isSelected ? "selectedEmp" : "none"} src={checkIco}/>
            </p>
        </div>
    )
}