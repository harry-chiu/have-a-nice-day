import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';
import LoginForm from 'src/components/LoginForm';

afterEach(cleanup);

describe('測試 LoginForm', () => {
  test('輸入功能正常', () => {
    const mockChange = jest.fn();

    const { getByTestId } = render(<LoginForm onChange={mockChange} />);

    fireEvent.change(getByTestId('account'), { target: { value: 'test' } });

    expect(mockChange).toBeCalled();
  });

  test('登入按鈕正常', () => {
    const mockSubmit = jest.fn();

    const { getByText } = render(<LoginForm onSubmit={mockSubmit} />);

    fireEvent.click(getByText('Login'));

    expect(mockSubmit).toBeCalled();
  });
});
