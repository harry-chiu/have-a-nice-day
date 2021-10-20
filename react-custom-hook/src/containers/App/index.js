import React from 'react';
import useForm from 'src/hooks/useForm';
import LoginForm from 'src/components/LoginForm';
import { Container } from './style';

const App = () => {
  const { values, errors, handleChange, handleSubmit } = useForm({
    initialValues: {
      account: '',
      password: '',
      rememberMe: false,
    },
    validation: values => {
      const errors = {};

      if (!values.account) errors.account = '請輸入帳號';
      else errors.account = null;

      if (!values.password) errors.password = '請輸入密碼';
      else errors.password = null;

      return errors;
    },
    onSubmit: values => {
      console.table(values);
    },
  });

  return (
    <Container>
      <LoginForm
        values={values}
        errors={errors}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </Container>
  );
};

export default App;
