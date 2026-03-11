import '../css/Loginpage.css'
import { useNavigate } from "react-router-dom";
import { useRef } from 'react';
import Registerpage from './Registerpage';
import axios from 'axios';

function Loginpage(){
    let navigate=useNavigate();
    let usernameref=useRef();
    let passref=useRef();
    let register=()=>{
        navigate('/register')
    };
    let login=()=>{
         let data={
        username:usernameref.current.value,
        password:passref.current.value,
        };
        axios.post('http://127.0.0.1:8000/login/logincheck/',data).then((res)=>{
            if (res.data.role == 'DOCTOR'){
                navigate('/doctor');
            }
            else if (res.data.role=='PATIENT'){
                navigate('/patient',{state:{name:res.data.username}});
            }
            else{
                console.log(res.data);
                alert('enter valid credentials')
            }
        }).catch((error)=>{
            console.log(error);
        })
    };
    return (
        <center>
        <div className="loginpage">
            <div className="card">
                <label htmlFor="">
                    <input type="text" placeholder='enter your username ' ref={usernameref}/>
                </label><br /><br />
                <label htmlFor="">
                    <input type="password" placeholder='enter your password' ref={passref}/>
                </label><br /><br />
                <button onClick={login}>LOGIN</button><br /><br />  
                <p>if you don't have account <button className='signin' onClick={register}>SIGN UP</button></p>
            </div>
        </div>
        </center>  
    );  
}
export default Loginpage;