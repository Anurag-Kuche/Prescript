// src/pages/Myappointments.jsx
import { useContext } from "react";
import { AppContext } from "../context/AppContext";

function Myappointments() {
  const { appointments } = useContext(AppContext);

  return (
    <div>
      <h1>Your Appointments</h1>
      {appointments && appointments.length > 0 ? (
        <ul>
          {appointments.map((appointment) => (
            <li key={appointment._id}>
              {appointment.doctorName} on {appointment.dateTime}
            </li>
          ))}
        </ul>
      ) : (
        <p>No appointments found</p>
      )}
    </div>
  );
}

export default Myappointments;  // Ensure this line exists
