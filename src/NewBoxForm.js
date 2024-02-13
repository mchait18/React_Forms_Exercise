import React, { useState } from "react";

const NewBoxForm = ({ addBox }) => {
    const INITIAL_STATE = {
        height: 0,
        width: 0,
        bgColor: ''
    }
    const [formData, setFormData] = useState(INITIAL_STATE);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(formData => ({
            ...formData,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        addBox({ ...formData });
        setFormData(INITIAL_STATE)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="height">Height: {formData.height}</label>
            <input
                id="height"
                type="range"
                min="1"
                max="200"
                name="height"
                placeholder="Height"
                value={formData.height}
                onChange={handleChange}
            />
            <label htmlFor="width">Width: {formData.width}</label>
            <input
                id="width"
                type="range"
                name="width"
                min="1"
                max="200"
                value={formData.width}
                onChange={handleChange}
            />
            <label htmlFor="bgColor">Background Color: </label>
            <input
                id="bgColor"
                type="color"
                name="bgColor"
                placeholder="Background Color"
                value={formData.bgColor}
                onChange={handleChange}
            />
            <button>Add Box</button>
        </form>
    )

}

export default NewBoxForm;