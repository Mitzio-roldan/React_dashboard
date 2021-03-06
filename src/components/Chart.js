import React from 'react';
import ChartRow from './ChartRow';
import {useState, useEffect, useRef} from 'react'


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