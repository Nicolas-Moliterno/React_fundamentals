import React from "react";
import If, {Else} from './if'
// eslint-disable-next-line import/no-anonymous-default-export
export default props => {

    const usuario = props.usuario || {}

    return (
        <div>
            <If test={usuario && usuario.nome}>
                Seja Bem vindo <strong>{ usuario.nome }</strong>
                <Else>
                    Seja Bem vindo <strong>Amigao</strong>
                </Else>
            </If>
        </div>
    )
}