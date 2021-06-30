import styled from "styled-components";

interface IInput {
    inputError?: boolean
}

export const Container = styled.form`
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  
  width: 30%;
  
  margin-top: 10px;
  
  
`;

export const Input = styled.input<IInput>`
  padding: 15px;
  border: ${({inputError}) => inputError ? '1px solid #e26f6f' : 'none'};
  background: #f5f5f5;
  border-radius: 5px;
  margin-top: 5px;
  margin-bottom: 5px;
  &:focus {
    outline: none;
  }
  
`;

export const Button = styled.button`
  padding: 15px;
  border: none;
  background: #4a67ff;
  border-radius: 5px;
  color: white;
  font-weight: bold;
  font-size: 14px;
  margin-top: 20px ;
  
  &:active {
    box-shadow: 0 0 10px rgba(0,0,0,0.5);
  }
  &:hover {
    cursor: pointer;
  }
  
  &:disabled {
    opacity: 0.7;
    &:hover {
      cursor: default;
    }
  }
`;

export const Title = styled.h1`
  margin: 0 auto;
  margin-bottom: 250px;
  font-size: 64px;
  line-height: 78px;
`;

export const Error = styled.div`
  padding: 15px;
  border: 1px solid #ebacac;
  border-radius: 5px;
  background: #f5e9e9;
  margin-bottom: 15px;
`;

export const Mark = styled.div`
  display: inline;
`;

export const LabelMark = styled.label`
  margin-left: 5px;
`;

export const InputError = styled.label`
  font-size: 14px;
  line-height: 17px;
  margin-bottom: 10px;
  color: #e26f6f;
`;

