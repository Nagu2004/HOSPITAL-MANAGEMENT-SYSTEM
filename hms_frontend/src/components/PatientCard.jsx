import "../css/PatientCard.css"
function PatientCard(props){
    return (
        <>
        <div className="patientcard">
            <div className="card">

            </div>
            <div className="name">
                <p>{props.name}</p>
            </div>
        </div>
        </>
    );
}
export default PatientCard;