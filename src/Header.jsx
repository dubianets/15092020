import React from "react";


export default function (props){
const fN = props.el.firstName;
const sN = props.el.secondName;
    return(

    <li>
        {fN + ' '}
        {sN}
    </li>


    )

}