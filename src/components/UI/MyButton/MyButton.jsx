import React from "react";
import cl from "./MyButton.module.scss"

const MyButton = ({children, ...props}) => {

    return (
        <button className={cl.myButton} {...props}>
            {children}
        </button>
    )
}

export default MyButton;