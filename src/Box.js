import React from "react";
import './Box.css'

const Box = ({ id, width, height, bgColor, removeBox }) => {

    return (
        <div>
            <div style={{
                backgroundColor: bgColor,
                width: `${width}px`,
                height: `${height}px`
            }}>
            </div>
            <button onClick={() => removeBox(id)}>X</button>
        </div>
    )

}

export default Box;
