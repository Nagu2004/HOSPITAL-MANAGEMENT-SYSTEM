// import "../css/Mainpage.css"
import Loginpage from "./Loginpage";
import { Routes,Route } from "react-router-dom";
import Registerpage from "./Registerpage";
import DoctorPage from "./DoctorPage";
import PatientPage from "./PatientPage";
function Mainpage(){
    return (
        <div className="mainpage">
            <Routes>
             <Route path="/register" element={<Registerpage/>}></Route>
            <Route path='/' element={<Loginpage />}></Route>
            <Route path="/doctor" element={<DoctorPage/>}></Route>
            <Route path="/patient" element={<PatientPage/>}></Route>
            </Routes>
        </div>
    );
}
export default Mainpage;