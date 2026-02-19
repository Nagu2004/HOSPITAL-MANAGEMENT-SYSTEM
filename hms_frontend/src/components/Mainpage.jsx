import "../css/Mainpage.css"
import Loginpage from "./Loginpage";
import { Routes,Route } from "react-router-dom";
import Registerpage from "./Registerpage";
function Mainpage(){
    return (
        <div className="mainpage">
            <Routes>
             <Route path="/register" element={<Registerpage/>}></Route>
            <Route path='/' element={<Loginpage />}></Route>
            </Routes>
        </div>
    );
}
export default Mainpage;