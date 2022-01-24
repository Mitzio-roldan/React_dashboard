import React from 'react';
import ChartRow from './ChartRow';
import {useState, useEffect, useRef} from 'react'

let tableRowsData = [
    {
        Title: 'Billy Elliot ',
        Length: '123',
        Rating: '5',
       Categories: ['Drama','Comedia'],
        Awards: 2
   },
   {
       Title: 'Alicia en el país de las maravillas',
       Length: '142',
       Rating: '4.8',
       Categories: ['Drama','Acción','Comedia'],
       Awards: 3
   },
 
]


function Chart (){
    
    const [products, setProducts] = useState([]);
    useEffect(()=>{

        fetch("/api/products")
		.then(result => result.json())
		.then(data =>{
            setProducts(data.products)
           
		})
		.catch(error => {
			console.log(error);
		})
	},[])
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4">
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Título</th>
                                <th>Descripción</th>
                                <th>Precio</th>
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Nombre</th>
                            <th>Título</th>
                            <th>Descripción</th>
                            <th>Precio</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            products.map( ( row , i) => {
                                return <ChartRow { ...row} key={i}/>
                            })
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>

    )
}

export default Chart;