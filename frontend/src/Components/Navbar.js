import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';


function NavBar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLoginToggle = () => {
    setIsLoggedIn((prevIsLoggedIn) => !prevIsLoggedIn);
  };

  return (
    <>
    <nav>
    <div>
  
      <ul id="navbar">
        <li><a href='profile.html'>User</a></li>
        <li><a href='project.html'>Project</a></li>
        <li><a href='about.html'>Collaboration</a></li>
        <li><a href='about.html'>Messages</a></li>
        <li>
              <button className="button-style" onClick={handleLoginToggle}>
                {isLoggedIn ? 'Logout' : 'Login'}
              </button>
            </li>
      </ul>
    </div>

    </nav>
    </>
  );
}

export default NavBar