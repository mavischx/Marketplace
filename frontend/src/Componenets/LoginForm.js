import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './LoginForm.css'

function LoginForm(props) {
  const { label, onChange, id, type, error, ...inputProps } = props;

  return (
    <div className="loginDetails">
        <label className='label'>{label}</label>
        <input type={type} {...inputProps} onChange={onChange} />
        {error && <span>{error}</span>}
    </div>
  );
}

export default LoginForm;
