import React from 'react';
import imagenFondo from '../assets/images/404error2.png';
import {Link, Route, Switch} from 'react-router-dom';
function NotFound(){
    return(
        <div className="text-center"  style={{margin: 'auto'}}>
            <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 50 +'rem'}} src={imagenFondo} alt=" Star Wars - Mandalorian "/>
            <h1 className='text-danger'>404</h1>
            <p className='text-dark' style={{fontSize:'3rem'}}>¡Cortaste toda la looz!  ¡¿Metiste un cutucuchillo?!</p>
            <Link className="nav-link" to="/">
            <button type="button" class="btn btn-danger">SACAR LA MANO DE AHÍ</button>
            </Link>
            
        </div>
        
    )
}


export default NotFound;