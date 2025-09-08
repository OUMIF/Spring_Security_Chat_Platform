import React, {useEffect, useState} from 'react'
import { listEmployees } from '../services/EmployeeService'

const ListEmployeeComponent = () => {

   const [employees, setEmployees] = useState([])

   useEffect( () => {
        listEmployees().then((response) => {
            setEmployees(response.data);
        }).catch(error => {
            console.error(error);
        })
   }, [])

  return (
    <div className='container-fluid py-4'>
        <div className="container">
            <h2 className='text-center mb-4'>List of Employee</h2>
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