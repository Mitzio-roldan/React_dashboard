import React from 'react';
import imagenFondo from '../assets/images/mandalorian.jpg';
import {useState, useEffect, useRef} from 'react'


function LastMovieInDb(){
    const [product, setProduct] = useState([]);
    useEffect(()=>{

        fetch("/api/products")
		.then(result => result.json())
		.then(data =>{
            
            
            fetch("/api/products/" + data.count)
            .then(result => result.json())
            .then(lastProduct =>{
                
                setProduct(lastProduct.product)
            })  
           
		})
		.catch(error => {
			console.log(error);
		})
	},[])
    
    
    
    
    
    
    
    
    
    
    return(
        <div className="col-lg-6 mb-4">
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Producto Añadido</h5>
                </div>
                <div className="card-body">
                    <div className="text-center">
                        <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={product.Url_image} alt=" Star Wars - Mandalorian "/>
                    </div>
                    <p style={{whiteSpace: "pre-line", margin: '10px', textAlign: 'center'}}>{product.description}</p>
                    {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
                </div>
            </div>
        </div>
    )
}

export default LastMovieInDb;
