import React, { useState } from "react";
import { v4 as uuid } from 'uuid';
import Box from "./Box"
import NewBoxForm from "./NewBoxForm"

const BoxList = () => {

    const [boxes, setBoxes] = useState([])

    const addBox = (newBox) => {
        setBoxes(boxes => [...boxes, { ...newBox, id: uuid() }])
    }
    const removeBox = (id) => {
        setBoxes(boxes => boxes.filter(b => b.id !== id))
    }

    return (
        <div>
            <h2>Color Box Maker</h2>
            <div>
                {boxes.map(({ id, width, height, bgColor }) =>
                    <Box
                        key={id}
                        id={id}
                        width={width}
                        height={height}
                        bgColor={bgColor}
                        removeBox={removeBox} />)}
            </div>
            <NewBoxForm addBox={addBox} />
        </div>
    )
}

export default BoxList;