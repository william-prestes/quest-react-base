import './botao-confirmar.css';

const BotaoConfirmar = (props) => {
    return <button className="botao" onClick={() => alert (`A label desse botão é ${props.label}`)}>{props.label}</button>;
}

BotaoConfirmar.defaultProps = {
    label: "Confirmar Envio"
}

export default BotaoConfirmar