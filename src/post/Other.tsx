import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Other = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
  });

  useEffect(() => {
    const storedFormData = JSON.parse(localStorage.getItem('formData') || '');
    if (storedFormData) {
      setFormData(storedFormData);
    }
  }, []);

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <h2>Name: {formData.name}</h2>
      <h2>Email: {formData.email}</h2>
      <button onClick={handleGoBack}>Go Back</button>
    </div>
  );
};

export default Other;
