import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.title}</td>
                    <td>{props.description}</td>
                    <td>${props.price}</td>
                </tr>
            )
    }
    
        

export default ChartRow;