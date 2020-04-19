import React from "react";

function MenuButton({label, action}) {
    return (
        <button onClick={()=>action()}>{label}</button>
    );
}

export default MenuButton;