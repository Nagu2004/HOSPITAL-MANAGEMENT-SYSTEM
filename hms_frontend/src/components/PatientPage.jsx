import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import "../css/PatientPage.css"
function PatientPage(){
    let [docdetails,setDocdetails]=useState([]);
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
            {
                docdetails.map((res)=>{
                    return <p>{res.doc_id}&nbsp;&nbsp;{res.doc_name}&nbsp;&nbsp;{res.specialization}{res.experience_years}</p>
                })
            }
            </div>
        </div>
    );
}
export default PatientPage;