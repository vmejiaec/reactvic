import React, {Component} from 'react';

class MensajeRespuesta extends Component {
    render(){
        return (
            <div>
                <p>Este es un mensaje de respuesta</p>
                <p>Saludos a: {this.props.nombre} desde: {this.props.app}</p>
            </div>
        );
    }
}

export default MensajeRespuesta;