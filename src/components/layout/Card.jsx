import "./Card.css";
import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {

    const cardStyle = {
        backgroundColor: props.color || "tomato",
        borderColor: props.color || "tomato"
    }

    return (
        <div className="Card" style={cardStyle}>
            <div className="Title">{ props.titulo }</div>
            <div className="Content">
                { props.children }
            </div>
        </div>
    );
};