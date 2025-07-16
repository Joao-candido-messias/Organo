import './botao.css'

const Botao = ({children, type, onClick}) => {
    return <button className={`botao botao-${type}`} onClick={onClick}>
        {children}
    </button>
}

export default Botao