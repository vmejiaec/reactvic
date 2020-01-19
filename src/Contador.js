import React, {Component} from 'react';

class Contador extends Component{
  constructor (...args){
    super(...args);
    this.state = {
      contador :0
    };
  }
  
  incrementar () {
    this.setState(
      {
        contador :
         this.state.contador + 1
      }
    )
}  
  render(){
    return(
      <div>
       <span>
         Contador {
          this.state.contador
         }
       </span>
       <button onClick={
         this.incrementar.bind(this)
       }
        >
         Más...
       </button>
      </div>
    );
  }
}

export default Contador;