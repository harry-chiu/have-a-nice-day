import React from 'react';
import {
  Container,
  Field,
  ActionBlock,
  Input,
  Button,
  ErrorMessage,
} from './style';

const LoginForm = ({
  values = {},
  errors = {},
  onSubmit = () => {},
  onChange = () => {},
}) => (
  <Container>
    <Field>
      <Input
        data-testid="account"
        name="account"
        onChange={onChange}
        value={values.account}
        placeholder="Account"
      />
      {errors.account && <ErrorMessage>{errors.account}</ErrorMessage>}
    </Field>

    <Field>
      <Input
        data-testid="password"
        type="password"
        name="password"
        onChange={onChange}
        value={values.password}
        placeholder="Password"
      />
      {errors.password && <ErrorMessage>{errors.password}</ErrorMessage>}
    </Field>

    <Field>
      <input
        id="rememberMe"
        type="checkbox"
        name="rememberMe"
        onChange={onChange}
        checked={values.rememberMe}
      />
      <label htmlFor="rememberMe">Remember Me</label>
    </Field>

    <ActionBlock>
      <Button onClick={onSubmit}>Login</Button>
    </ActionBlock>
  </Container>
);

export default LoginForm;
