import React from "react";

export const PushButton = () => {
    const ButtonClick = (e)=>{
        console.log("Button clicked")
        e.stopPropagation()
    }

    const divClicked = () => {
        console.log("div clicked")
    }

    return (
        <div onClick={divClicked}>
            this click
            <button onClick={ButtonClick}>Click me</button>
        </div>
    )
}