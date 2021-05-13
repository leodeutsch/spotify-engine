import styled from 'styled-components';

export const Form = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    width: 400px;
    padding: 10px 16px;
    border-radius: 16px 0 0 16px;
    border: 0;
    background: #eee;
  }

  button {
    padding: 10px 16px;
    border-radius: 0 16px 16px 0;
    border: 0;
    color: #fff;
    background: #1db954;

    transition: background-color 0.2s ease-in-out;

    &:hover {
      filter: brightness(0.6);
    }
  }
`;
