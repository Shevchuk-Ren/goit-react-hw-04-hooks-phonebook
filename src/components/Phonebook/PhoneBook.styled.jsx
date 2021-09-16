import styled from '@emotion/styled';

export const Form = styled.form`
  border: 1px solid rgb(61, 57, 57);
  width: 300px;
  padding: 10px;
  background-color: rgba(84, 81, 81, 0.353);
`;

export const Label = styled.label`
  display: flex;
  justify-content: space-between;
  margin-bottom: 5px;
  color: rgb(241, 239, 235);
`;

export const Input = styled.input`
  border: 1px solid rgb(241, 239, 235);
  border-radius: 2px;
  &[type='text'],
  &[type='tel'] {
    background-color: inherit;
    border: 1px solid rgb(76, 74, 74);
    color: aliceblue;
  }
  &[type='text']:focus {
    background-color: rgb(61, 57, 57);
  }
`;

export const Button = styled.button`
  width: fit-content;
  padding: 3px 5px;
  background-color: rgb(68, 68, 154);
  border-radius: 2px;
  color: rgb(241, 239, 235);
`;
