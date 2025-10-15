import React, { useState } from 'react';
import UserForm from './components/UserForm';
import PreviewCard from './components/PreviewCard';
import './styles/layout.css';

const initial = { name: '', email: '', occupation: '', bio: '' };

const validate = (values) => {
  const errors = {};
  if (!values.name.trim()) errors.name = 'Name is required';
  if (!values.email.trim()) errors.email = 'Email is required';
  else if (!values.email.includes('@') || !values.email.includes('.')) errors.email = 'Invalid email';
  return errors;
};

const App = () => {
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});
  const [saved, setSaved] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues(prev => ({ ...prev, [name]: value }));
    setSaved(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const err = validate(values);
    setErrors(err);
    if (Object.keys(err).length === 0) {
      setSaved(true);
    }
  };

  return (
    <div className="container-center">
      <h2 className="header-title">Simple Form — Controlled Inputs + Live Preview</h2>
      <div className="layout">
        <div className="form-box">
          <UserForm values={values} onChange={handleChange} onSubmit={handleSubmit} errors={errors} />
        </div>
        <div className="preview-box">
          <PreviewCard user={values} />
        </div>
        {saved && <div style={{ color: 'green', marginTop: 8 }}>Saved successfully!</div>}
      </div>
    </div>
  );
};

export default App;
