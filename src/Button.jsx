import React, {useState} from "react";
import Refresh from "./Refresh";


export default function Button(props){

    const count = props.el;


    let ButtonPlus = () => {
        props.counterPlus(props.index)
    }

    let ButtonMinus = () => {
        props.counterMinus(props.index);
    }

    let refreshCounter = ()=> {
        props.refresh(props.index);
    }

    return(

        <div>

        <div>

            <Refresh refr={props.refreshAll}/>

        </div>
        <div>

        <button onClick={ButtonMinus}>-</button>
             {count}
        <button onClick={ButtonPlus}>+</button>
            <button onClick={refreshCounter}>Refresh</button>

        </div>

        </div>
    )

}