import React from "react";
import cl from "./MySelect.module.css"

const MySelect = ({filter, setFilter, options}) => {

    return (
        <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className={cl.mySelect}
        >
            <option value="">поиск по</option>
            {options.map(option => 
                <option
                    key={option.value}
                    value={option.value}
                >
                    {option.text}
                </option>
            )}
        </select>
    )
}

export default MySelect;