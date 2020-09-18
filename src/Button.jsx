import React, {useState} from "react";




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

    let removeC = () => {
        props.removeCounter(props.index);
    }

    return(

        <div>


        <div>

        <button onClick={ButtonMinus}>-</button>
             {count}
        <button onClick={ButtonPlus}>+</button>
            <button onClick={refreshCounter}>Refresh</button>
            <button onClick={removeC}>remove</button>

        </div>


        </div>
    )

}