/*
    if teste={exp}
        <span></span>
    /if
*/


// eslint-disable-next-line import/no-anonymous-default-export
export default props => {
    const eslseChild = props.children.filter(child => {
        return child.type && child.type.name === 'Else'
    })[0]

    const ifChildren = props.children.filter(child => {
        return child !== eslseChild
    })


    if(props.test) {
        return ifChildren
    } else if(eslseChild) {
        return eslseChild
    } else {
        return false
    }
}

export const Else = props => props.children 