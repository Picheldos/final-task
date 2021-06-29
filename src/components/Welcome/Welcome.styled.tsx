import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

export const Title = styled.h1`
  margin: 0 auto;
  margin-bottom: 300px;
  font-size: 64px;
  line-height: 78px;
`;

export const HelloName = styled.div`
  margin: 0 auto;
  margin-bottom: 20px;
  display: inline-block;
`;
export const Hello = styled.h1`
  font-weight: normal;
`;

export const Logout = styled.button`
  margin: 0 auto;
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