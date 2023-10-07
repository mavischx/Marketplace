import { useState, useEffect, useRef } from "react";
import './UserRegister.css'
import RegisterForm from '../Componenets/RegisterForm'
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
            errorMessage:"Cannot be empty",
            pattern:"^.+$",
            label:"First Name",
            required:true,
        },
    
        {
            id:2,
            name:"lastName",
            type:"text",
            placeholder:"Last Name",
            errorMessage:"Cannot be empty",
            pattern:"^.+$",
            label:"Last Name",
            required:true,
        },

        {
            id:3,
            name:"userName",
            type:"text",
            placeholder:"User Name",
            errorMessage:"Cannot be empty",
            pattern:"^.+$",
            label:"User Name",
            required:true,
        },

          {
            id:4,
            name:"email",
            type:"text",
            placeholder:"example@gmail.com",
            errorMessage:"Must be a valid email address",
            pattern:"^.+@.+\..+\\.com$",
            label:"Email address",
            required:true,
          },

          {
            id:5,
            name:"password",
            type:"password",
            errorMessage:"Password invalid",
            label:"Password",
            required:true,
          },

          {
            id:6,
            name:"personalSkills",
            type:"text",
            placeholder:"Java,Php,etc",
            errorMessage:"Please provide your skills. Atleast 20 characters",
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

      const handleSubmit = (e)=>{
        e.preventDefault();
        const data = new FormData();
    
        for(const key in values){
          data.append(key, values[key]);
        }
      }
    
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
            updatedErrors[fieldName] = input.errorMessage;
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
