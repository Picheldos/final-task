import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  left: 35%;
  
  top: 40%;
  display: flex;
  flex-direction: column;
  margin: auto;
`;
export const HelloName = styled.div`
  display: inline-block;
`;
export const Hello = styled.h1`
  font-weight: normal;
`;

export const Logout = styled.button`
  position: absolute;
  top: 120%;
  left: 30%;
  background: #f5f5f5;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  padding: 15px;
  font-size: 18px;
  line-height: 22px;
  width: 200px;

  &:active {
    box-shadow: 0 0 7px rgba(0,0,0,0.4);
  }
  &:hover {
    cursor: pointer;
  }
`;