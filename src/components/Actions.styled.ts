import styled from "styled-components";

export const Box = styled.div`
  display: flex;
  align-items: center;
  column-gap: 10px;
  margin-left: 10px;
`;

export const BoxItem = styled.img`
  position: relative;
  height: 25px;
  cursor: pointer;
  z-index: 3;
`;

export const BackSurface = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  z-index: 1;
  background-color: transparent;
`;
