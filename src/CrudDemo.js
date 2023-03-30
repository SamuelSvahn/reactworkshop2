import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from "react-router-dom";
import { useForm } from 'react-hook-form';

const CrudDemo = () => {
    const API_URL = "http://localhost:8080/api/v1/person"
    const [people, setPeople] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const history = useHistory();


    // The get information from database to List

    useEffect(()=>{
        axios.get(API_URL).then(response =>{
            if(response.status === 200){
                setPeople(response.data);
            }
        })

    }, []);


    const TableHeader = () =>{
        return(
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Action</th>
                </tr>
            </thead>
        );

    }

    const TableAction = (props) =>{

        const detailsAction = ()=>{
            history.push('/details/' + props.people.id)
            setShowDetails(true);
        }
        
        //todo
        const deleteAction = () =>{
            axios.delete(API_URL + "/" + props.people.id).then(response =>{
                setPeople("");
            })

        }

        const editAction = () =>{
            
        }

        return(
        <>
        <button type='button' className='btn btn-info' onClick={detailsAction}>Details</button>
        <button type='button' className='btn btn-danger' onClick={deleteAction}>Delete</button>
        <button type='button' className='btn btn-warning' onClick={editAction}>Edit</button>
        </>
        );
        
    }

    const PersonDetails = (props) =>{
        const params =useParams();
        const location = useLocation();
        const [person, setPerson] = useState({});
        

        useEffect(()=>{
            axios.get(API_URL+"/"+params.id).then(response =>{
                if(response.status === 200){
                    setPerson(response.data);
                }
            })
    
        }, []);
        
        
            return(<>
                {showDetails && (
                    <div className="card">
                        <div className="card-header bg-info text-white">
                            Person Information
                        </div>
                        <div className="card-body">
                            <h5 className="card-title">
                                {person.title}
                            </h5>
                            <p className="card-text">Id: {person.id} </p>
                            <p className="card-text">Name: {person.firstName} {person.lastName} </p>
                            <p className="card-text">Email: {person.email} </p>
                        </div>
                        <div className="card-footer bg-dark">
                            <button type='button' className='btn btn-outline-info' onClick={()=>{
                                setShowDetails(false);
                            }}>Back</button>
        
                        </div>
                    </div>
                )}
            </>
            );
        
            

        }

    const TableRow= (props) =>{

        if(!props.list && props.list.length === 0){
            return (
                <tbody>
                    <tr>
                        <td colSpan="5">Data was empty</td>
                    </tr>
                </tbody>
            );
        }else { 
            return(
            <tbody> 
                {props.list.map((people) => {
                const row = (
                    <tr key={people.id}>
                      <td>{people.id}</td>
                      <td>{people.firstName}{" "}{people.lastName}</td>
                      <td>{people.email}</td>
                    
                      <td>
                        <TableAction people={people} />
                      </td>
                    </tr>
                  );
                  return row;
                })}
              </tbody>
            );
          }
        };


    return (<>
        <h1>Person List</h1>
        <table className="table table-striped">
        <TableHeader />
        <TableRow list={people} />
        <PersonDetails people={people}/>
      </table>
    </>
  );
};

export default CrudDemo;