import React from 'react';
import { render } from '@testing-library/react';
import App from 'src/containers/App';

describe('測試 <App />', () => {
  test('<LoginForm /> 正常顯示', () => {
    const { getByText, getByTestId } = render(<App />);

    expect(getByTestId('account')).toBeInTheDocument();
    expect(getByTestId('password')).toBeInTheDocument();
    expect(getByText('Login')).toBeInTheDocument();
  });
});
