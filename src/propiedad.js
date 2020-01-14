import React,{Component} from 'react';

class Propiedad extends Component{
  render(){
    return(
      <div>
        <h3> cuentas de
            { this.props.saldo}
        </h3>
      </div>
    );
  }

}

export default Propiedad