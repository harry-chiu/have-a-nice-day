import styled from 'styled-components';
import { COLOR, SPACING } from 'src/constants/index';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  width: 100%;
  min-height: 420px;
  padding: ${SPACING.xl};
  border: 1px solid ${COLOR.form.border};
  background: ${COLOR.form.background};
  border-radius: 2px;
`;

export const Field = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 32px;
`;

export const ActionBlock = styled.div``;

export const ErrorMessage = styled.div`
  position: absolute;
  bottom: -24px;
  display: flex;
  align-items: center;
  height: 24px;
  color: ${COLOR.text.error};
  line-height: 1;
  font-size: 14px;
`;

export const Input = styled.input`
  display: block;
  width: 100%;
  max-width: 100%;
  padding: ${SPACING.md};
  border: 1px solid ${COLOR.form.border};
  transition: 0.25s ease;

  &:focus {
    outline: none;
    border-color: #000000;
  }
`;

export const Button = styled.button`
  display: block;
  width: 100%;
  padding: ${SPACING.md};
  color: #ffffff;
  background: #000000;
  border: none;
  transition: 0.25s ease;
  cursor: pointer;

  &:hover {
    opacity: 0.75;
  }
`;
