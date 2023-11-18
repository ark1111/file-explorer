import styled from "styled-components";

export const Box = styled.div`
  width: 100%;
  margin: 10px 0;
`;

export const ParentBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  user-select: none;
`;

export const ParentBoxArrowBox = styled.div<{ $isOpen: boolean }>`
  width: 20px;
  height: 20px;
  /* border: 1px solid blue; */
  display: flex;
  align-items: center;
  justify-content: center;
  transform: ${(props) => (props.$isOpen ? "rotate(90deg)" : "rotate(0deg)")};
`;

export const ParentBoxArrowBoxEmpty = styled.div`
  width: 20px;
  height: 20px;
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
  border: 1px solid #11111130;
  cursor: pointer;
  box-shadow: 1px 3px 5px 0px rgba(0,0,0,0.75);
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

export const ChildsBox = styled.div<{ $isOpen: boolean }>`
  padding-left: 30px;
  max-height: ${(props) => (props.$isOpen ? "1000px" : "0px")};
  overflow-y: hidden;
`;
