import '../css/Loginpage.css'
import { useNavigate } from "react-router-dom";
import Registerpage from './Registerpage';
function Loginpage(){
    let navigate=useNavigate();
    let register=()=>{
        navigate('/register')
    }

    return (
        <div className="loginpage">
            <div className="card">
                <label htmlFor="">
                    <input type="text" placeholder='enter your username '/>
                </label><br /><br />
                <label htmlFor="">
                    <input type="password" placeholder='enter your password'/>
                </label><br /><br />
                <button>LOGIN</button><br /><br />  
                <p>if you don't have account <button className='signin' onClick={register}>SIGN UP</button></p>
            </div>
        </div>  
    );
}
export default Loginpage;