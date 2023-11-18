import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-left: 20px;
  margin-top: 10px;
`;

export const Input = styled.input`
  height: 40px;
  width: 100px;
  border-radius: 10px;
  border: 1px solid #777;
  background-color: transparent;
  padding: 0 10px;
  font-size: 16px;
`;

export const Button = styled.img`
  height: 40px;
  cursor: pointer;
`;

export const ErrorText = styled.div`
  font-size: 14px;
  color: red;
  margin-top: 5px;
  margin-left: 20px;
`;
