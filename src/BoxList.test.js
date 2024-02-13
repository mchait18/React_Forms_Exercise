import React from "react";
import { render, fireEvent, queryByLabelText } from "@testing-library/react";
import BoxList from "./BoxList";

function addBox(boxList) {
    const heightInput = boxList.getByLabelText("Height: 0");
    const widthInput = boxList.getByLabelText("Width: 0");
    const colorInput = boxList.getByLabelText("Background Color:");
    const btn = boxList.queryByText("Add Box");
    fireEvent.change(heightInput, { target: { value: 100 } });
    fireEvent.change(widthInput, { target: { value: 100 } });
    fireEvent.change(colorInput, { target: { value: 'magenta' } });
    fireEvent.click(btn);
}
it("renders without crashing", function () {
    render(<BoxList />);
});

it("matches snapshot", function () {
    const { asFragment } = render(<BoxList />);
    expect(asFragment()).toMatchSnapshot();
});

it("should add new item", function () {
    const boxList = render(<BoxList />);
    //no remove button yet
    expect(boxList.queryByText('X')).not.toBeInTheDocument();

    addBox(boxList)
    //expect to see a remove button
    expect(boxList.queryByText('X')).toBeInTheDocument();
    const removeButton = boxList.getByText('X')
    expect(removeButton.previousSibling).toHaveStyle(`
    width: 100px;
    height: 100px;
    background-color: rgb(0, 0, 0);
    `)
})
it("can remove a box", function () {
    const boxList = render(<BoxList />);
    addBox(boxList);

    const removeButton = boxList.getByText("X");

    // click the remove button and the box should be gone
    fireEvent.click(removeButton);
    expect(removeButton).not.toBeInTheDocument();
});