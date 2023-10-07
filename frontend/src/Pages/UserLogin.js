import { useState, useEffect, useRef } from "react";
import './UserLogin.css'
import LoginForm from "../Componenets/LoginForm";

function UserLogin(){
    const [values, setValues] = useState({
        email:"",
        password:"", 
      });

    const [errors, setErrors] = useState({
        email:"",
        password:"",
      });
    
      const inputs = [
        {
          id:1,
          name:"email",
          type:"text",
          placeholder:"example@gmail.com",
          errorMessage:"Must be a valid email address",
          pattern:"^.+@.+\..+\\.com$",
          label:"Email address",
          required:true,
        },
    
        {
          id:2,
          name:"password",
          type:"password",
          errorMessage:"Password invalid",
          label:"Password",
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
        <div className="loginForm">
          <div className="divform">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="title">Login</h1>
              {inputs.map((input) => (
                <LoginForm
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                  error={errors[input.name]}
                />
              ))}
    
              <button className="submitButton" type="submit">
                Log in
              </button>
            </form>
          </div>
        </div>
      );
}

export default UserLogin;
