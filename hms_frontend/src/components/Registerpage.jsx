import "../css/Registerpage.css"
import {useNavigate} from "react-router-dom";
import { useRef,useState } from "react";
import axios from 'axios';
function Registerpage(){
    let [role,setRole]=useState('');
    let [patform, setPatform]=useState({
            role: role,
            username: "",
            email: "",
            password: "",
            specialization: "",
            experience: "",
            fee: "",
            phone: "",
            firstname: "",
            lastname: "",
            dob: "",
            address: "",
            bloodgroup: "",
            gender: ""
    })
    const handleChange = (e) => {
    setPatform({
        ...patform,
        [e.target.name]: e.target.value
    });
    };
    let navigate=useNavigate();
        let login=()=>{
            axios.post('http://127.0.0.1:8000/login/logininsert/',patform).then((response)=>{
                alert('Registration Successfull');
                navigate('/');
            }).catch((error)=>{
                console.log(error);
                alert('registaration failed');
            })

        }
    return (
        <center>
        <div className="registerpage">
            <label htmlFor="">
                <select name="role" value={role} onChange={(e)=>{setRole(e.target.value);handleChange(e)}}>
                <option value="" disabled>SELECT ROLE</option>
                <option value="DOCTOR">DOCTOR</option>
                <option value="PATIENT">PATIENT</option>
                <option value="RECEPTIONIST">RECEPTIONIST</option>
            </select>
            </label><br /><br />
            {role == "DOCTOR" && ( 
                <>
                <input  name="username" type="text" placeholder="ENTER USERNAME" onChange={handleChange}/><br /><br />
                <input name="email" type="email" placeholder="ENTER EMAIL ID" onChange={handleChange}/><br /><br />
                <input name="password" type="password" placeholder="CREATE PASSWORD" onChange={handleChange}/><br /><br />
                <input name="specialization" type="text" placeholder="ENTER SPECIALIZATION" onChange={handleChange}/><br /><br />
                <input name="experience" type="text" placeholder="EXPERIENCE IN YEARS" onChange={handleChange}/><br /><br />
                <input name="fee" type="number" placeholder="ENTER CONSULTATION FEE" onChange={handleChange}/><br /><br />
                <input name="phoneno" type="text" placeholder="ENTER PHONE NO" onChange={handleChange}/>
                </>
            )}
            { role == "PATIENT" && (
                <>
                <input name="firstname" type="text" placeholder="Firstname" onChange={handleChange}/><br /><br />
                <input name="lastname" type="text" placeholder="Lastname" onChange={handleChange}/><br /><br />
                <input name="email" type="email" placeholder="ENTER EMAIL ID" onChange={handleChange}/><br /><br />
                <input name="password" type="password" placeholder="CREATE PASSWORD" onChange={handleChange}/><br /><br />
                <input name="dob" type="date" placeholder="DATE OF BIRTH" onChange={handleChange}/><br /><br />
                <input name="phoneno" type="text" placeholder="PHONE NO" onChange={handleChange}/><br /><br />
                <input name="address" type="text" placeholder="ADDRESS" onChange={handleChange}/><br /><br />
                <input name="bloodgroup" type="text" placeholder="BLOOD GROUP" onChange={handleChange}/><br /><br />
                <input name="created" type="datetime-local" placeholder="CREATED AT" onChange={handleChange}/><br /><br />
                <input type="radio" name="gender" value={"male"} onChange={handleChange}/>male&nbsp;&nbsp;
                <input type="radio" name="gender" value={"female"}onChange={handleChange}/>female<br /><br />
                </>
            )
            }
            <button onClick={login}>REGISTER</button>
                    </div>
        </center>
    );
}
export default Registerpage;