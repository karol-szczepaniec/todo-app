import React, {useState} from "react";

export default function UsersBar(){

    const [employeesList, setEmployeesList] = useState({
        employees:[
            {
              id: 1,
              name: "Adam Nowak",
              picture: "src"
            },
            {
                id: 2,
                name: "Michał Potoczek",
                picture: "src"
            },
            {
                id: 3,
                name: "Antoni Worek",
                picture: "src"
            },
        ]
        }
    )
    return(
        <div>
            <p>Lista pracowników</p>
            <p>Tutaj search select</p>
            <p>onSelect, zaznaczenie</p>
            <p>input text</p>
            <p>submit button, z walidacją</p>
        </div>
    )
}