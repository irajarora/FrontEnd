import React from 'react';


const ComplaintTable = (props) => {
    return ( 
        <div className="mt-3">
            <table className="table table-dark table-striped w-50 mx-auto">
            <thead>
                <tr>
                    <th>Complaint Id</th>
                    <th>Product Model Number</th>
                    <th>Complaint Name</th>
                    <th>Status</th>
                    <th>Client Id</th>
                    {/* <th>Engineer Id</th> */}                
                    <th>Employee Id</th>
                </tr>
            </thead>
            <tbody>
                    {props.comp.map(comp=>(
                        <tr>
                            <td>{comp.complaintId}</td>
                            <td>{comp.productModelNumber}</td>
                            <td>{comp.complaintName}</td>
                            <td>{comp.status}</td>
                            <td>{comp.clientId}</td>
                            <td>{comp.engineerId}</td>
                        </tr>
                    ))}
                    
            </tbody>
        </table>
        </div>
     );
}
 
export default ComplaintTable;