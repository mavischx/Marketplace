import { useState, useEffect, useRef } from "react";
import './UserRegister.css'
import RegisterForm from '../Componenets/RegisterForm'
import { useNavigate } from 'react-router-dom';
import UserLogin from './UserLogin'

function UserRegister(){
    const [values, setValues] = useState({
        firstName:"", 
        lastName:"", 
        userName:"", 
        email:"", 
        password:"", 
        personalSkills:"", 
        location:"", 
      });

    const [errors, setErrors] = useState({
        firstName:"", 
        lastName:"", 
        userName:"", 
        email:"", 
        password:"", 
        personalSkills:"", 
        location:"", 
      });
    
      const inputs = [
        {
            id:1,
            name:"firstName",
            type:"text",
            placeholder:"First Name",
            errormessage:"Cannot be empty",
            pattern:"^.+$",
            label:"First Name",
            required:true,
        },
    
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder:"Last Name",
            errormessage:"Cannot be empty",
            pattern:"^.+$",
            label:"Last Name",
            required:true,
        },

        {
            id:3,
            name:"username",
            type:"text",
            placeholder:"User Name",
            errormessage:"Cannot be empty",
            pattern:"^.+$",
            label:"User Name",
            required:true,
        },

          {
            id:4,
            name:"email",
            type:"text",
            placeholder:"example@gmail.com",
            errormessage:"Must be a valid email address",
            pattern:"^.+@.+\..+\\.com$",
            label:"Email address",
            required:true,
          },

          {
            id:5,
            name:"password",
            type:"password",
            errormessage:"Password invalid",
            label:"Password",
            required:true,
          },

          {
            id:6,
            name:"skills",
            type:"text",
            placeholder:"Java,Php,etc",
            errormessage:"Please provide your skills. Atleast 20 characters",
            pattern:"^.{21,}$",
            required:true,
          },

          {
            id:7,
            name:"location",
            type:"text",
            placeholder:"address/eircode",
            required:true,
          },
     
      ];

      const navigate = useNavigate();
      const handleSubmit = async (e) => {
        e.preventDefault();
      
        // Validate the form before sending the request
        for (const key in values) {
          validateField(key, values[key]);
        }
      
        // Check if there are any errors
        const hasErrors = Object.values(errors).some((error) => error !== "");
        if (!hasErrors) {
          try {
            const response = await fetch('http://localhost:3001/register', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(values),
              
            });
            console.log(response);
            
            if (response.ok) {
              console.log("User registration successful",
              values.firstName,
              values.lastName,
              values.username,
              values.email,
              values.password,
              values.skills,
              values.location);
              // You can redirect to the login page or perform other actions here
              // e.g., navigate to the login page
              navigate('../login');
            } else {
              // Log the error response from the server
              const errorResponse = await response.json();
              console.error('Registration Failed:', errorResponse.message);
            }
          } catch (error) {
            
            console.error('Error:', error);
          }
        }else{
          console.log("Cannot register");
        }
      };
    
      const onChange = (e) => {
        const { name, value } = e.target;
        setValues({ ...values, [name]: value });
        validateField(name, value);
      };

      const validateField = (fieldName, value) => {
        const updatedErrors = { ...errors };
        const input = inputs.find((input) => input.name === fieldName);

        if (input) {
          if (input.required && value.trim() === "") {
            updatedErrors[fieldName] = "";
          } else if (input.pattern && !new RegExp(input.pattern).test(value)) {
            updatedErrors[fieldName] = input.errormessage;
          } else {
            updatedErrors[fieldName] = "";
          }
          setErrors(updatedErrors);
        }
      };
    
      return (
        <div className="registerForm">
          <div className="divform">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="title">Register account</h1>
              {inputs.map((input) => (
                <RegisterForm
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  error={errors[input.name]}
                />
              ))}
    
              <button className="submitButton" type="submit">
                Register
              </button>
              
            </form>
          </div>
        </div>
      );
}

export default UserRegister;
