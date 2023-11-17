import React from "react";
import {
  Box,
  ChildsBox,
  ParentBox,
  ParentBoxArrowBox,
  ParentBoxMain,
  ParentBoxMainIcon,
  ParentBoxMainTitle,
} from "./FilesListItem.styled";
import { FormatedDataChildItemType } from "../types";

type Props = {
  info: FormatedDataChildItemType;
};

const FilesListItem = ({ info }: Props) => {
  return (
    <Box>
      <ParentBox>
        {info.type === "folder" ? (
          <ParentBoxArrowBox></ParentBoxArrowBox>
        ) : null}
        <ParentBoxMain>
          <ParentBoxMainIcon></ParentBoxMainIcon>
          <ParentBoxMainTitle>{info.title}</ParentBoxMainTitle>
        </ParentBoxMain>
      </ParentBox>
      <ChildsBox>
        {info.childs?.map((item) => (
          <FilesListItem key={item.id} info={item} />
        ))}
      </ChildsBox>
    </Box>
  );
};

export default FilesListItem;
