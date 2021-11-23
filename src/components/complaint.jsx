import React from 'react';
import ComplaintTable from './complainttable';
import axios from 'axios';

class Complaint extends React.Component {
    state={
        comp:[],
    };

    componentDidMount(){
        axios
            .get("http://localhost:8080/api/getComplaint")
            .then((res)=>{
                console.log(res);
                this.setState({comp:res.data});
            })
            .catch((err)=>console.log(err));
    }

    render() { 
        return (<div>
            <ComplaintTable comp={this.state.comp} />
        </div>);
    }
}
 
export default Complaint;