import React from "react";
import cl from "./MyModal.module.scss";

const MyModal = ({children, showDialog, hideDialog}) => {
    const rootClasses = showDialog ? [cl.myModal, cl.active] : [cl.myModal]

    return (
        <div className={rootClasses.join(' ')} onClick={() => hideDialog(false)}>
            <div className={cl.modalContent} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    )
}

export default MyModal;