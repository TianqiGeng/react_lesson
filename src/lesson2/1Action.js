import React from 'react'
function ActionLink() {
    function handleClick(e) {
        //仅仅针对link使用e
        e.preventDefault();
        console.log("this is a alter")
    }
    return (
        <a href="#" onClick={handleClick}>
            Click me
        </a>
    )
}
export default ActionLink;