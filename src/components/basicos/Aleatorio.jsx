import React from "react";
// eslint-disable-next-line import/no-anonymous-default-export
export default (props) => {
    const { min, max } = props;

    const { a, b } = [1, 2]
    const { c, d, x } = { c:12, d:45, x:'teste' }

    const aleatorio = parseInt(Math.random() * (props.max - props.min)) * props.min;
    return (
        <div>
            <h2>Valor Aleatorio</h2>
                <p>
                    <strong>Valor Minimo: </strong>
                    { min }
                </p>
                <p>
                    <strong>Valor Maximo: </strong>
                    { max }
                </p>
                <p>
                    <strong>Valor Escolhido: </strong>
                    { aleatorio }
                </p>
        </div>
    );
};