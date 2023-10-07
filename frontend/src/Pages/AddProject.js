import { useState, useEffect, useRef } from "react";
import ProjectForm from '../Componenets/ProjectForm'
import './AddProject.css'

function AddProject(){
    const [values, setValues] = useState({
        projectName:"",
        description:"",
        personakSkills:"",
        status:"",
        noOfCollaborations:"",
        file:null, 
      });

      const [errors, setErrors] = useState({
        projectName:"",
        description:"",
        personalSkills:"",
        status:"",
        noOfCollaborations:"",
        file:"", // Error message for file input
      });
    
      const inputs = [
        {
          id:1,
          name:"projectName",
          type:"text",
          placeholder:"(e.g online marketing website)",
          errorMessage:"Project name should be more than 10 characters and shouldn't include special characters",
          pattern:"^[A-Za-z0-9 ]{10,500}$",
          label:"Project Name",
          required:true,
        },
    
        {
          id:2,
          name:"Description",
          type:"textarea",
          placeholder:"project requirements",
          errorMessage:"Cannot be empty and must be more than 10 characters!!!",
          pattern:"^.{11,}$",
          label:"Description",
          required:true,
        },
    
        {
          id:3,
          name:"personalSkills",
          type:"text",
          placeholder:"Java,Php,etc",
          errorMessage:"Cannot be empty and must more than 20 characters",
          pattern:"^.{21,}$",
          label:"Personal Skills",
          required:true,
        },
    
        {
          id:4,
          name:"status",
          type:"text",
          placeholder:"Full stack developer, student",
          errorMessage:"Cannot be empty and must more than 20 characters",
          pattern:"^.{21,}$",
          label:"Status",
          required:true,
        },
    
        {
          id:5,
          name:"noOfCollaborations",
          type:"text",
          placeholder:"3 collaborations",
          errorMessage:"Numbers & digits only!",
          pattern:"^[0-9]+$",
          label:"Collaborations",
          required:true,
        },
    
        {
          id:6,
          name:"file",
          type:"file",
          errorMessage:"File must be in pdf format!!!",
          label:"File*(PDF AND PNG ONLY)",
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
        
        if (e.target.type === 'file') {
          // Handle file input separately
          if (e.target.files.length > 0) {
            setValues({ ...values, file: e.target.files[0] });
          } else {
            // If the user clears the file selection, set file to null
            setValues({ ...values, file: null });
          }
        } else {
          setValues({ ...values, [e.target.name]: e.target.value });
        }
      };
    
      return (
        <div className="App">
          <div className="divform">
            <form className="form" onSubmit={handleSubmit}>
              <h1 className="title">Add new project</h1>
              {inputs.map((input) => (
                <ProjectForm
                  key={input.id}
                  {...input}
                  value={values[input.name]}
                  onChange={onChange}
                />
              ))}
    
              <button className="submitButton" type="submit">
                Submit
              </button>
            </form>
          </div>
        </div>
      );
}

export default AddProject;

