import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../css/PatientPage.css"
import { useLocation } from "react-router-dom";
function PatientPage(){
    let [docdetails,setDocdetails]=useState([]);
    let location =useLocation();
    let name=location.state?.name;
   useEffect(() => {
        axios.get("http://127.0.0.1:8000/doctors/insertdoctor/")
        .then((res)=>{
            setDocdetails(res.data);
        })
        .catch((error)=>{
            console.log(error);
        });
    }, []);   // runs only once when component loads


    return (
        <div className="patientpage">
            <div className="docdetails">  
                <p>hii,{name}</p>
            <table cellSpacing={0} border={1}>
                <tr><th>DOCTOR ID</th><th>DOCTOR_NAME</th><th>SPECIALIZATION</th><th>EXPERIENCE IN YRS</th></tr>
            {
                docdetails.map((res)=>{
                    return <tr><td>{res.doc_id}</td><td>{res.doc_name}</td><td>{res.specialization}</td><td>{res.experience_years}</td></tr>
                })
            }
            </table>
            </div>
        </div>
    );
}
export default PatientPage;