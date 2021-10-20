import { act, cleanup, renderHook } from '@testing-library/react-hooks';
import useForm from 'src/hooks/useForm';

afterEach(cleanup);

describe('測試 useForm', () => {
  test('initialValues 正常', () => {
    const { result } = renderHook(() =>
      useForm({
        initialValues: {
          account: 'test',
        },
      }),
    );

    expect(result.current.values.account).toEqual('test');
  });

  test('validation 正常', () => {
    const mockSubmit = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        initialValues: {
          account: '',
        },
        validation: values => {
          const errors = {};

          if (!values.account) errors.account = '請輸入帳號';

          return errors;
        },
        onSubmit: mockSubmit,
      }),
    );

    act(() => {
      result.current.handleSubmit();
    });

    expect(result.current.errors.account).toEqual('請輸入帳號');
    expect(mockSubmit).not.toBeCalled();
  });

  test('handleChange 正常', () => {
    const mockEvent = {
      target: {
        type: 'text',
        name: 'account',
        value: 'test',
      },
    };

    const { result } = renderHook(() => useForm());

    act(() => {
      result.current.handleChange(mockEvent);
    });

    expect(result.current.values.account).toEqual('test');
  });

  test('handleSubmit 正常', () => {
    const mockSubmit = jest.fn();

    const { result } = renderHook(() =>
      useForm({
        onSubmit: mockSubmit,
      }),
    );

    result.current.handleSubmit();

    expect(mockSubmit).toBeCalled();
  });
});
