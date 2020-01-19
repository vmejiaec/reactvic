import React, {Component} from "react";

class CicloVida extends Component {
  constructor(...args){
      super(...args);
      console.log('Ejecuto constructor ', ...args);
      this.state = {
          estado : 'Inicializado en el constructor'
      };
  }

  render(){
      return(
          <div>
              <p>Componente con propiedades y estado inicializado</p>
              <p>Estado : {this.state.estado}</p>
              <p>Propiedad : {this.props.propiedad}</p>
          </div>
      );
  }

  componentWillMount(){
      console.log('Se ejecuta componentWillMount');
  }

  componentDidMount(){
      console.log('Se ejecuta componentDidMount');
  }

  componentWillReceiveProps(nextProps){
      console.log('Se ejecuta componentWillReceiveProps con: ' , nextProps);
  }

  shouldComponentUpdate(nextProps, nextState){
      console.log('Ejecutando shouldComponentUpdate con: ', nextProps, nextState);
      return true;
  }

  componentWillUnmount(){
      console.log('Se desmonta el componente... componentWillUnmount');
  }

}

CicloVida.defaultProps ={
    propiedad: 'Valor por defecto definido para la propiedad'
}

export default CicloVida;