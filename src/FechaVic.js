import React from 'react';

export default function (props) {
    var fechaDate = new Date(parseInt(props.timestamp,10));
    var fecha = fechaDate.getDate() + '/' + 
                (fechaDate.getMonth()+1) + '/' +
                fechaDate.getFullYear();
    return (
        <div>
            <span>{fecha}</span>
        </div>
    );
}