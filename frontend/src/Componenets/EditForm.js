import './EditForm.css'

function EditForm(props) {
  const { label, onChange, id, type, error, ...inputProps } = props;

  return (
    <div className="editDetails">
        <label className='label'>{label}</label>
        <input type={type} {...inputProps} onChange={onChange} />
    </div>
  );
}

export default EditForm;
