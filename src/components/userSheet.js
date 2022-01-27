import React from 'react';


function ChartRow(props){
    return (
                <tr>
                    <td>{props.name}</td>
                    <td>{props.email}</td>
                    <td>{props.username}</td>
                    
                </tr>
            )
    }
    
        

export default ChartRow;