import React from 'react';
import ChartRow from './userSheet';
import {useState, useEffect, useRef} from 'react'


function UserList (){
    
    const [users, setUsers] = useState([]);
    useEffect(()=>{

        fetch("/api/users")
		.then(result => result.json())
		.then(data =>{
            setUsers(data.data)
           
		})
		.catch(error => {
			console.log(error);
		})
	},[])
    
    
    return (
        /* <!-- DataTales Example --> */
        <div className="card shadow mb-4" style={{margin: 'auto', width: '100%'}}>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
                        <thead>
                            <tr>
                                <th>Nombre</th>
                                <th>Email</th>
                                <th>Username</th>
                                
                                
                            </tr>
                        </thead>
                        <tfoot>
                            <tr>
                            <th>Nombre</th>
                            <th>Email</th>
                            <th>Username</th>
                                
                            </tr>
                        </tfoot>
                        <tbody>
                            {
                            users.map( ( row , i) => {
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

export default UserList;