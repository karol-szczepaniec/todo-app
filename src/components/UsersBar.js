import React, {useState} from "react";
import EmployerCard from "./EmplyerCard";

export default function UsersBar(props){

    const [newTask, setNewTask] = useState({taskText: ""})
    const [currentEmp, setCurrentEmp] = useState({ currentEmp: null})
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
               setCurrentEmp({currentEmp: i.id})
            }else{
                i.isSelected = false;
            }
        })
        setEmployeesList({employees:newList})
    }

    function beforeSubmit(){
        let checked = false;
        employeesList.employees.map(el=>{
            if(el.isSelected){
                checked =  true;
            }
        })

        if(newTask.taskText.length > 2 && checked){
            props.checkedForm({payload:{type: 'ADD',id: 1, empId: currentEmp.currentEmp, taskText: newTask.taskText}});
            setNewTask({taskText: ""})

            employeesList.employees.map(el=>{
                el.isSelected = false;
            })
        }
    }

    const eList = employeesList.employees.map(em=>{return(<EmployerCard key={em.id} item={em} selectEl={selectEmployer}/>)})

    return(
        <div>
            <textarea placeholder="Zadanie" value={newTask.taskText} onInput={(e)=>setNewTask({taskText: e.target.value})}/>
            {eList}
            <button className="button" onClick={(e)=>{
                e.preventDefault();
                beforeSubmit();
            }}>DODAJ</button>
        </div>
    )
}