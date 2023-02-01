import React from "react";
import cl from "./MyInput.module.css"

const MyInput = ({...porps}) => {

    return (
        <input className={cl.myInput} {...porps}/>
    )
}

export default MyInput;