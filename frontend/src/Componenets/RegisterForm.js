import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './RegisterForm.css'

function RegisterForm(props) {
  const { label, onChange, id, type, error, ...inputProps } = props;

  return (
    <div className="registerDetails">
        <label className='label'>{label}</label>
        <input type={type} {...inputProps} onChange={onChange} />
        {error && <span>{error}</span>}
    </div>
  );
}

export default RegisterForm;
