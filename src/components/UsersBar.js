import React, {useState} from "react";
import EmployerCard from "./EmplyerCard";

export default function UsersBar(){

    const [employeesList, setEmployeesList] = useState({
        employees:[
            {
              id: 1,
              name: "Adam Nowak",
              picture: "src",
              isSelected: false
            },
            {
                id: 2,
                name: "Michał Potoczek",
                picture: "src",
                isSelected: false
            },
            {
                id: 3,
                name: "Antoni Worek",
                picture: "src",
                isSelected: false
            },
        ]
        }
    )

    function selectEmployer(eId){
        let newList = employeesList.employees;

        newList.map(i=>{
            if(i.id == eId){
                i.isSelected = !i.isSelected;
            }else{
                i.isSelected = false;
            }
        })
        setEmployeesList({employees:newList})
    }

    const eList = employeesList.employees.map(em=>{return(<EmployerCard key={em.id} item={em} selectEl={selectEmployer}/>)})

    return(
        <div>
            <textarea placeholder="Zadanie" onInput={(e)=>console.log(e.target.value)}/>
            {eList}
        </div>
    )
}