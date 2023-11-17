import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const ParentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`;

export const ParentBoxArrowBox = styled.div`
  width: 20px;
  height: 20px;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
`;
export const ParentBoxArrowicon = styled.img`
  height: 10px;
`;

export const ParentBoxMain = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  column-gap: 10px;
  border-radius: 10px;
  border: 1px solid #111;
  cursor: pointer;
`;

export const ParentBoxMainIcon = styled.img`
  height: 20px;
  width: 20px;
  /* border: 1px solid red; */
`;

export const ParentBoxMainTitle = styled.div`
  font-size: 16px;
  color: "#111";
`;

export const ChildsBox = styled.div`
  padding-left: 30px;
`;
