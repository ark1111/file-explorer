import React, { useState } from "react";
import {
  Box,
  ChildsBox,
  ParentBox,
  ParentBoxArrowBox,
  ParentBoxArrowicon,
  ParentBoxMain,
  ParentBoxMainIcon,
  ParentBoxMainTitle,
} from "./FilesListItem.styled";
import { FormatedDataChildItemType } from "../types";
import { Icons } from "../data";

type Props = {
  info: FormatedDataChildItemType;
};

const FilesListItem = ({ info }: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const openAndCloseFileHandler = () => {
    if (info.type === "folder") {
      setIsOpen((oldState) => !oldState);
    }
  };

  const getIcon = () => {
    if (info.type === "folder") {
      return Icons["folder"];
    } else {
      let nameParts = info.title.split(".");
      let fileType = nameParts[nameParts.length - 1];
      if (fileType && Icons[fileType]) {
        return Icons[fileType];
      } else {
        return null;
      }
    }
  };
  return (
    <Box>
      <ParentBox>
        {info.type === "folder" ? (
          <ParentBoxArrowBox $isOpen={isOpen}>
            <ParentBoxArrowicon
              src="/icons/right-arrow.svg"
              alt="right-arrow-icon"
            />
          </ParentBoxArrowBox>
        ) : null}
        <ParentBoxMain onClick={openAndCloseFileHandler}>
          {getIcon() ? <ParentBoxMainIcon src={getIcon() || ""} /> : null}
          <ParentBoxMainTitle>{info.title}</ParentBoxMainTitle>
        </ParentBoxMain>
      </ParentBox>
      <ChildsBox $isOpen={isOpen}>
        {info.childs?.map((item) => (
          <FilesListItem key={item.id} info={item} />
        ))}
      </ChildsBox>
    </Box>
  );
};

export default FilesListItem;
