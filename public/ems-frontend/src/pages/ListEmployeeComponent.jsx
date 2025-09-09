import React, {useEffect, useState} from 'react'
import { deleteEmployee, listEmployees } from '../services/EmployeeService'
import { useNavigate } from 'react-router-dom'

const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([])
   const navigator = useNavigate();

   useEffect( () => {      //au lancement de l’app ou quand tu arrives sur la page qui contient ce composant), useEffect(..., []) s’exécute une seule fois et appelle getAllEmployees()
        getAllEmployees()
   }, [])

   function getAllEmployees(){
    listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })

   }

   function addNewEmployee(){
    navigator('/add-employee')

   }
   function updateEmployee(id){
        navigator(`edit-employees/${id}`)
   }
   function removeEmployee(id){
    console.log(id);
        deleteEmployee(id).then((response) =>{
          getAllEmployees();
       }).catch(error =>{
          console.error(error);
       })
   }


  return (
    <div className='container-fluid py-4'>
        <div className="container">
            <h2 className='text-center mb-4'>List of Employee</h2>
            <div className="row justify-content-center mb-3">
            <div className="col-12 col-lg-10 text-start">
                <button className='btn btn-outline-success' onClick={addNewEmployee}>
                Add Employee
                </button>
            </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-12 col-lg-10">
                    <div className="table-responsive">
                        <table className='table table-striped table-bordered mx-auto'>
                            <thead className="table-dark">
                                <tr>
                                    <th>Employee Id</th>
                                    <th>Employee First Name</th>
                                    <th>Employee Last Name</th>
                                    <th>Employee Email</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    employees.map(employee =>
                                        <tr key={employee.id}>
                                            <td>{employee.id}</td>
                                            <td>{employee.firstName}</td>
                                            <td>{employee.lastName}</td>
                                            <td>{employee.email}</td>
                                            <td>
                                                <button className='btn btn-info' onClick={() => updateEmployee(employee.id)}>Update</button>
                                                <button className='btn btn-danger' onClick={() => removeEmployee(employee.id)}
                                                        style={{marginLeft: '10px'}}
                                                    >delete</button> 
                                            </td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ListEmployeeComponent