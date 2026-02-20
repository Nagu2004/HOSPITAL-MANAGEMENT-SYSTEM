import "../css/Registerpage.css"
import {useNavigate} from "react-router-dom";
import { useRef } from "react";
import axios from 'axios';
function Registerpage(){
    let navigate=useNavigate();
        let idref=useRef();
        let usernameref=useRef();
        let emailref=useRef();
        let passref=useRef();
        let roleref=useRef();
        let login=()=>{
            let data={
                user_id: idref.current.value,
                username: usernameref.current.value,
                email: emailref.current.value,
                password : passref.current.value,
                role: roleref.current.value
            };
            axios.post('http://127.0.0.1:8000/login/logininsert/',data).then((response)=>{
                alert('Registration Successfull');
                navigate('/');
            }).catch((error)=>{
                console.log(error);
                alert('registaration failed');
            })

        }
    return (
        <div className="registerpage">
            <label htmlFor="">
                <input type="text" placeholder="ENTER USER ID" ref={idref}/>
            </label><br /><br />
            <label htmlFor="">
                <input type="text" placeholder="ENTER USERNAME" ref={usernameref}/>
            </label><br /><br />
            <label htmlFor="">
                <input type="email" placeholder="ENTER EMAIL ID" ref={emailref}/>
            </label><br /><br />
            <label htmlFor="">
                <input type="password" placeholder="CREATE PASSWORD" ref={passref}/>
            </label><br /><br />
            <label htmlFor="">
                <select name="" id="" defaultValue={'SELECT ROLE'} ref={roleref}>
                    <option value="DOCTOR">DOCTOR</option>
                    <option value="PATIENT">PATIENT</option>
                    <option value="RECEPTIONIST">RECEPTIONIST</option>
                </select>
            </label><br /><br />
            <button onClick={login}>REGISTER</button>
        </div>
    );
}
export default Registerpage;