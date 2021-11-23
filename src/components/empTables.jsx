import React from "react";

const EmpTables = (props) => {
    return ( 
        <table className="table table-dark table-striped w-50 mx-auto">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                    {props.employees.map(emp=>(
                        <tr>
                            <td>{emp.empId}</td>
                            <td>{emp.empName}</td>
                            <td>{emp.salary}</td>
                        </tr>
                    ))}
                    
            </tbody>
        </table>

     );
}
 
export default EmpTables;