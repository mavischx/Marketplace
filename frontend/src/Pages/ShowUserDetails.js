import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import { useNavigate } from "react-router-dom";
import EditUser from './EditUser';
import './ShowUserDetails.css';

function ShowUserDetails() {
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  
  const { userId } = useParams(); // Access the userId from URL parameter

  useEffect(() => {
    const storedUserId = sessionStorage.getItem('userId');
    
    if(storedUserId){
    // Replace with your API endpoint
    fetch(`http://localhost:3001/user/${storedUserId}`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch user details");
        }
        return response.json();
      })
      .then((userData) => {
        setUser(userData);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
} },    
[]); // Include userId in the dependency array to re-fetch data when it changes

  return (
    <div className="userDetails">
      {loading ? (
        <p>Loading user details...</p>
      ) : (
        <div className="divForm">
            <form className="form">
                <h1 className="title">User Profile</h1>
                <label>First Name </label>
                <input type="text" value={user.firstName} disabled/>

                <label>Last Name:</label>
                <input type="text" value={user.lastName} disabled/>

                <label>Username: </label>
                <input type="text" value={user.userName} disabled/>

                <label>Email: </label>
                <input type="text" value={user.email} disabled/>

                <label>Password: </label>
                <input type="text" value={user.password} disabled/>

                <label>Skills:  </label>
                <input type="text" value={user.skills} disabled/>
                
                <label>Location: </label>
                <input type="text" value={user.location} disabled/>

                <button className="editButton">
                    Edit
                </button>
                
            </form>
        </div>
      )}
    </div>
  );
}

export default ShowUserDetails;
