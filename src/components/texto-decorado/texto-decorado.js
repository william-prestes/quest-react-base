const TextoDecorado = (props) => {
    return <p style={{ color: props.color }}>{props.text.toUpperCase()}</p>;
  };
  
  TextoDecorado.defaultProps = {
    text: "Maior que a tristeza de não haver vencido é a vergonha de não ter lutado!",
    color: "seagreen"
  };
  
  export default TextoDecorado;