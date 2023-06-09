export default function ComParametro(props) {
    const aluno = props.aluno
    const status = props.nota >= 7 ? 'Aprovado' : 'Recuperação'
    const notaInt = Math.ceil(props.nota)
    return (
            <div>
                <h2> { props.titulo } </h2>
                <h3><strong> { aluno } </strong>
                tem a nota
                <strong> { notaInt } </strong>
                e está
                <strong> { status } </strong>
                </h3>
            </div>
    )
}