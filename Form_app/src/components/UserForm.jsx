import React from 'react';

// Stateless controlled form: values and handlers come from parent via props
const UserForm = ({ values, onChange, onSubmit, errors }) => {
  return (
    <form onSubmit={onSubmit}>
      <label>
        Name
        <input name="name" value={values.name} onChange={onChange} />
        {errors.name && <small style={{ color: 'red' }}>{errors.name}</small>}
      </label>

      <label>
        Email
        <input name="email" value={values.email} onChange={onChange} />
        {errors.email && <small style={{ color: 'red' }}>{errors.email}</small>}
      </label>

      <label>
        Occupation
        <input name="occupation" value={values.occupation} onChange={onChange} />
      </label>

      <label>
        Bio
        <textarea name="bio" value={values.bio} onChange={onChange} rows={3} />
      </label>

      <button type="submit">Save</button>
    </form>
  );
};

export default UserForm;