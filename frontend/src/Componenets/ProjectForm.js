import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './ProjectForm.css'

function ProjectForm(props) {
  const { label, errorMessage, onChange, id, type, value, ...inputProps } = props;
  const showError = value && errorMessage; // Show error only if there is a value and errorMessage

  if (type === 'textarea') {
    return (
      <div className="projectDetails">
        <label className="label">{label}</label>
        <textarea {...inputProps} onChange={onChange} />
        <span>{errorMessage}</span>
      </div>
    );
  }

  if (type === 'file') {
    return (
      <div className="projectDetails">
        <label className="label">{label}</label>
        <input type="file" {...inputProps} onChange={onChange} />
        {showError && <span>{errorMessage}</span>}
      </div>
    );
  }

  return (
    <div className="projectDetails">
      <label className='label'>{label}</label>
      <input type={type} {...inputProps} onChange={onChange} value={value} />
      {showError && <span>{errorMessage}</span>}
    </div>
  );
}

export default ProjectForm;
