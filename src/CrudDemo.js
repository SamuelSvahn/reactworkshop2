import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Switch, Route, Link, useHistory, useParams, useLocation, Redirect } from "react-router-dom";
import { useForm } from 'react-hook-form';
import AlertMessage from './AlertMessage';

const CrudDemo = () => {
    const API_URL = "http://localhost:8080/api/v1/person"
    const [people, setPeople] = useState([]);
    const [showDetails, setShowDetails] = useState(false);
    const history = useHistory();
    const [alert, setAlert] = useState({type: "", message: ""})
    const [reload, setReload] = useState(false);



    useEffect(()=>{
        axios.get(API_URL).then(response =>{
            if(response.status === 200){
                console.log("RESPONSE:", response);
                setPeople(response.data);
            }
        })

    }, [reload]);

    




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
            history.push('/details/' + props.person.id)
            setShowDetails(true);
        }
        
        
        const deleteAction = () =>{
            axios.delete(API_URL + "/" + props.person.id).then(response =>{
                setReload(!reload);
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
            if(params.id){
                axios.get(API_URL+"/"+params.id).then(response =>{
                if(response.status === 200){
                    setPerson(response.data);
                }
            })
            }
            
    
        }, []);
        
        
            return(<>
                {showDetails && (
                    <div className="card col-md-3">
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

        if(props.list.length === 0){
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
                {props.list.map((person) => {
                const row = (
                    <tr key={person.id}>
                      <td>{person.id}</td>
                      <td>{person.firstName}{" "}{person.lastName}</td>
                      <td>{person.email}</td>
                    
                      <td>
                        <TableAction person={person} />
                      </td>
                    </tr>
                  );
                  return row;
                })}
              </tbody>
            );
          }
        };

        const HookForm = () => {
            const {register, handleSubmit, formState: {errors} } = useForm();
        
            const saveData = (data)=> {
                axios.post(API_URL, data).then(response=>{
                    if(response.status === 201){setReload(!reload);}
                    
                    
                })
            }

            const resetData = () =>{

            }
        
            return (
                
                    <form className='form-control mt-3 bg-light' onSubmit={handleSubmit(saveData)}>
                        <div className='row mt-3'>
                        <div className='col'>
                            <input type="text" {...register("firstName", {required: true, maxLength: 40})} className='form-control' id="firstName" name="firstName" placeholder='Enter First Name...' />
                           {errors.firstName && errors.firstName.type === "required" && (<span className='text-danger'>First Name is Required!</span>)} 
                           {errors.firstName && errors.firstName.type === "maxLength" && (<span className='text-danger'>Max Length is exceeded!</span>)} 
                        </div>
                        <div className='col mb-3'>
                            <input type="text" {...register("lastName", {required: true, maxLength: 40})} className='form-control' id="lastName" name="lastName" placeholder='Enter Last Name...' />
                            {errors.lastName && errors.lastName.type === "required" && (<span className='text-danger'>Last Name is Required!</span>)} 
                            {errors.lastName && errors.lastName.type === "maxLength" && (<span className='text-danger'>Max Length is exceeded!</span>)} 
                        </div>
                        </div>

                        <div className='mb-3'>
                            <input type="text" {...register("email", {required: true, maxLength: 40})} className='form-control' id="email" name="email" placeholder='Enter Email...' />
                            {errors.email && errors.email.type === "required" && (<span className='text-danger'>Email is Required!</span>)} 
                            {errors.email && errors.email.type === "maxLength" && (<span className='text-danger'>Email Length is exceeded!</span>)} 
        
                        </div>

                        <div className='mb-3'>
                            <input type="text" {...register("title", {required: true, maxLength: 40})} className='form-control' id="title" name="title" placeholder='Enter Title...' />
                            {errors.title && errors.title.type === "required" && (<span className='text-danger'>Title is Required!</span>)} 
                            {errors.title && errors.title.type === "maxLength" && (<span className='text-danger'>Title Length is exceeded!</span>)} 
        
                        </div>
                        <div className='mb-3'>
                            <button type='submit' className='btn btn-success'>Add</button>
                            <button type='button' className='btn btn-danger ms-1' onClick={resetData}>Reset</button>
                        </div>
                    
                    </form>
                    
                
            );
        
        };


    return (<>
        <h3 className='mt-3'>Sign up</h3>
        <HookForm/>
        <br/>
        <hr/>
        <br/>
        <h3>Person List</h3>
        <table className="table table-striped">
        <TableHeader />
        <TableRow list={people} />
      </table>
      <PersonDetails />
    </>
  );
};

export default CrudDemo;