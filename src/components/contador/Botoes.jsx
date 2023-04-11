import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    return (
        <div>
            <button onClick={props.setInc}><strong>+</strong></button>
            <button onClick={props.setDec}><strong>-</strong></button>
        </div>
    );
};