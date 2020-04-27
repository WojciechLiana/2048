import React, {useEffect} from "react";

function Lost({increaseLosts}) {

    useEffect(() => increaseLosts());

    return (
        <div>
            You Lost!
        </div>)
}

export default Lost;