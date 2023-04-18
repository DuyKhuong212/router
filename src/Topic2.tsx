import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Topic2 = () => {

  const navigate = useNavigate();
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');
    return storedFormData ? JSON.parse(storedFormData) : { name: '', email: '' };
  });
// ?????
const handleChange = (e:any) => {
  const { name, value } = e.target;
  setFormData((prevState: any) => ({
    ...prevState,
    [name]: value,
  }));
};
const handleSubmit = (e:any) => {
  e.preventDefault();
  localStorage.setItem('formData', JSON.stringify(formData));
  navigate('/other');
};
return (
  <div className='content'>
    <h1>Nội Dung</h1>
    <form onSubmit={handleSubmit}>
  <label htmlFor="name">Name:</label>
  <input
    type="text"
    name="name"
    id="name"
    value={formData.name}
    onChange={handleChange}
  />
  <br />
  <label htmlFor="email">Email:</label>
  <input
    type="email"
    name="email"
    id="email"
    value={formData.email}
    onChange={handleChange}
  />
  <br />
  <button type="submit">Submit</button>
</form>
    
  </div>
);
}
