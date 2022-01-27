import React from "react";
import {useState, useEffect, useRef} from 'react'
function GenresInDb() {
  
  const [user, setUser] = useState([]);
  
  useEffect(()=>{

    fetch("/api/users")
  .then(result => result.json())
  .then(data =>{
    
        fetch("/api/users/" + data.total)
        .then(result => result.json())
        .then(lastUser =>{
            
            setUser(lastUser.data)
        })  
       
})
.catch(error => {
  console.log(error);
})
},[])
  

  return(
    <div className="col-lg-6 mb-4" style={{margin: '0 auto'}}>
        <div className="card shadow mb-4">
            <div className="card-header py-3">
                <h5 className="m-0 font-weight-bold text-gray-800">Ultimo Usuario Registrado</h5>
            </div>
            <div className="card-body">
                <div className="text-center">
                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src={user.Url_image} alt=" Star Wars - Mandalorian "/>
                </div>
                <p style={{whiteSpace: "pre-line", margin: '10px', textAlign: 'center'}}>Nombre: {user.name}</p>
                <p style={{whiteSpace: "pre-line", margin: '10px', textAlign: 'center'}}>Email: {user.email}</p>
                {/* <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View movie detail</a> */}
            </div>
        </div>
    </div>
)
}

export default GenresInDb;
