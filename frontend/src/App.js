import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import Profile from './Pages/profile';
import Project from './Pages/project';
import Collaboration from './Pages/collaboration';
import Register from './Pages/register';
import Login from './Pages/login';
import AddProject from './Pages/addedproject';
import ShowUserDetails from './Pages/ShowUserDetails';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
      <div
        style={{
          display: 'flex',
          background: '#002266',
          padding: '5px 0 5px 5px',
          fontSize: '20px',
          justifyContent: 'space-between',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
      
          <NavLink to="/project" style={({ isActive }) => ({
            color: isActive ? 'greenyellow' : 'white',
            textDecoration: 'none', 
            marginRight: '20px'
          })}>
            Project
          </NavLink>

        </div>
        {isLoggedIn && (
          <>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <NavLink to="/collaboration" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'white',
                textDecoration: 'none',
              })}>
                Collaboration
              </NavLink>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <NavLink to="/profile" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'white',
                textDecoration: 'none',
              })}>
                Message
              </NavLink>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
              <NavLink to="/addedproject" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'white',
                textDecoration: 'none',
              })}>
                Add project
              </NavLink>
            </div>
          </>
        )}
        <div style={{
          margin: '10px',
          marginLeft: 'auto',
          display: 'flex',
          alignItems: 'center',
          fontSize: '1.3rem',
          fontWeight: '600',
          color: 'white',
        }}>
          {isLoggedIn ? (
            <NavLink to="/project" style={({ isActive }) => ({
              color: isActive ? 'greenyellow' : 'white',
              marginRight: '10px',
              textDecoration: 'none',
            })} onClick={() => {
              console.log("clicked")
              setIsLoggedIn(false) // Logout: Set isLoggedIn to false
            }}>
              Logout
            </NavLink>
          ) : (
            <>
              <NavLink to="/login" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'white',
                marginRight: '10px',
                textDecoration: 'none',
              })} onClick={() => setIsLoggedIn(false)}> {/* Login: Set isLoggedIn to true */}
                Login
              </NavLink>
              <NavLink to="/register" style={({ isActive }) => ({
                color: isActive ? 'greenyellow' : 'white',
                textDecoration: 'none',
              })}>
                Register
              </NavLink>
            </>
          )}
        </div>
      </div>

      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/collaboration" element={<Collaboration />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/addedproject" element={<AddProject />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path="/showUserDetails" element={<ShowUserDetails/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
