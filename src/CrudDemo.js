import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CrudDemo = () => {
    const API_URL = "http://localhost:8080/api/v1/person"
    const [people, setPeople] = useState([]);

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

    const TableAction = () =>{

        const detailsAction = () =>{

        }

        const deleteAction = () =>{

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
      </table>
    </>
  );
};

export default CrudDemo;