import React from 'react';
import SmallCard from './SmallCard';
import {useState, useEffect, useRef} from 'react'

/*  Cada set de datos es un objeto literal */

/* <!-- Movies in DB --> */

let ProductTop = {
    title: 'Total de Productos',
    color: 'primary', 
    cuantity: 0,
    icon: 'fas fa-stream'
}

/* <!-- Total awards --> */

let totalUsersTop = {
    title:'Total de Usuarios', 
    color:'success', 
    cuantity: '0',
    icon:'fas fa-address-card'
}

/* <!-- Actors quantity --> */



let cartProps = [ProductTop, totalUsersTop];

function ContentRowMovies(){
    const [productss, setProductss] = useState(0);
    const [totalUsers, setTotalUsers] = useState(0);
    useEffect(()=>{
		console.log('hiiiiii');
        fetch("/api/products")
		.then(result => result.json())
		.then(data =>{
            setProductss(data.count)
           
		})
		.catch(error => {
			console.log(error);
		})
	},[])
    useEffect(()=>{
		console.log('hiiiiii');
        fetch("/api/users")
		.then(result => result.json())
		.then(data =>{
            setTotalUsers(data.total)
           
		})
		.catch(error => {
			console.log(error);
		})
	},[])


    
    
    ProductTop.cuantity = productss.toString();
    
    totalUsersTop.cuantity = totalUsers.toString();
    
    
    
    
    
    
    return (
    
        <div className="row">
            
            {cartProps.map( (movie, i) => {

                return <SmallCard {...movie} key={i}/>
            
            })}

        </div>
    )
}

export default ContentRowMovies;