import './texto-decorado.css';

const TextoDecorado = (props) => {
    return <p className='texto' style={{ color: props.color }}>{props.text.toUpperCase()}</p>;
  };
  
  TextoDecorado.defaultProps = {
    text: "Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!",
    color: "rgb(114, 86, 140)"
  };
  
  export default TextoDecorado;