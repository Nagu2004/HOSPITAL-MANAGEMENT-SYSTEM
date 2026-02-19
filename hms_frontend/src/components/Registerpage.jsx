import "../css/Registerpage.css"
function Registerpage(){
    return (
        <div className="registerpage">
            <label htmlFor="">
                <input type="text" placeholder="ENTER USER ID"/>
            </label><br /><br />
            <label htmlFor="">
                <input type="text" placeholder="ENTER USERNAME"/>
            </label><br /><br />
            <label htmlFor="">
                <input type="email" placeholder="ENTER EMAIL ID"/>
            </label><br /><br />
            <label htmlFor="">
                <input type="password" placeholder="CREATE PASSWORD"/>
            </label><br /><br />
            <label htmlFor="">
                <select name="" id="" defaultValue={'SELECT ROLE'}>
                    <option value="DOCTOR">DOCTOR</option>
                    <option value="PATIENT">PATIENT</option>
                    <option value="RECEPTIONIST">RECEPTIONIST</option>
                </select>
            </label><br /><br />
            <button>REGISTER</button>
        </div>
    );
}
export default Registerpage;