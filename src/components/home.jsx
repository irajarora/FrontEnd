import React from "react";
import EmpTables from "./empTables";

class Home extends React.Component {
    state={
        count:10,
        employee:{
            empId: 1001,
            empName: "Rajat",
            salary:"600000"
        },
        employees:[
            {
                empId: 1003,
                empName: "deepak",
                salary:"90000"
            },
            {
                empId: 1005,
                empName: "Raj",
                salary:"6000"
            },
            {
                empId: 1007,
                empName: "aman",
                salary:"600"
            },
        ]
    }
    render() { 
        return <div>
            <h1>Home</h1>
            {/* <p>{this.state.employee}</p> */}
        <table className="table table-striped table-hover w-50 mx-auto">
            <thead>
                <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Salary</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{this.state.employee.empId}</td>
                    <td>{this.state.employee.empName}</td>
                    <td>{this.state.employee.salary}</td>
                </tr>
            </tbody>
        </table>

        <EmpTables employees={this.state.employees} />


        </div>;
    }
}
 
export default Home;