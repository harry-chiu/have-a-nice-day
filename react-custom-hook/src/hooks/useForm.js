import { useState } from 'react';
import { INPUT_VALUE_GETTER } from 'src/constants/index';

const useForm = ({ initialValues = {}, validation, onSubmit } = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = event => {
    const inputType = event.target.type;

    const getInputValue =
      INPUT_VALUE_GETTER[inputType] || INPUT_VALUE_GETTER.text;

    setValues(prev => ({
      ...prev,
      [event.target.name]: getInputValue(event),
    }));
  };

  const handleSubmit = () => {
    if (validation) {
      const newErrors = validation(values);
      setErrors(newErrors);

      if (Object.values(newErrors).some(Boolean)) return;
      else onSubmit(values);
    } else {
      onSubmit(values);
    }
  };

  return {
    values,
    errors,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
