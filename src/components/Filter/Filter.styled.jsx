import styled from '@emotion/styled';

export const Label = styled.label`
  width: 300px;
  display: flex;
  justify-content: flex-end;
  border: 1px solid rgb(61, 57, 57);
  padding: 10px;
  color: rgb(241, 239, 235);
  background-color: rgba(84, 81, 81, 0.353);
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
`;
