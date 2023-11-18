import React, { useState } from "react";
import {
  Box,
  ChildsBox,
  ParentBox,
  ParentBoxArrowBox,
  ParentBoxArrowBoxEmpty,
  ParentBoxArrowicon,
  ParentBoxMain,
  ParentBoxMainIcon,
  ParentBoxMainTitle,
} from "./FilesListItem.styled";
import { FormatedDataChildItemType } from "../types";
import { Icons } from "../data";
import Actions from "./Actions";
import AddItem from "./AddItem";

type Props = {
  info: FormatedDataChildItemType;
  activeActionsId: number | null;
  setActiveActionsId: React.Dispatch<React.SetStateAction<number | null>>;
  deleteHandler: (id: number) => void;
};

const FilesListItem = ({
  info,
  activeActionsId,
  setActiveActionsId,
  deleteHandler,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [showAddItem, setShowAddItem] = useState<"file" | "folder" | null>(
    null
  );

  const openAndCloseFileHandler = () => {
    if (info.type === "folder") {
      setIsOpen((oldState) => !oldState);
      if (isOpen) {
        setShowAddItem(null);
      }
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

  const showActionsHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    setActiveActionsId(info.id);
  };

  const hideActionsHandler = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.stopPropagation();
    setActiveActionsId(null);
  };

  const deleteFunction = () => {
    deleteHandler(info.id);
    setActiveActionsId(null);
  };

  const addItemHandler = (type: "file" | "folder") => {
    setIsOpen(true);
    setActiveActionsId(null);
    setShowAddItem(type);
  };

  const hideAddItemBox = () => {
    setShowAddItem(null);
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
        ) : (
          <ParentBoxArrowBoxEmpty />
        )}
        <ParentBoxMain
          onClick={openAndCloseFileHandler}
          onContextMenu={(e) => showActionsHandler(e)}
        >
          {getIcon() ? <ParentBoxMainIcon src={getIcon() || ""} /> : null}
          <ParentBoxMainTitle>{info.title}</ParentBoxMainTitle>
        </ParentBoxMain>
        {info.id === activeActionsId ? (
          <Actions
            hideActionsHandler={hideActionsHandler}
            type={info.type}
            deleteFunction={deleteFunction}
            addItemHandler={addItemHandler}
            parentId={info.parentId}
          />
        ) : null}
      </ParentBox>
      <ChildsBox $isOpen={isOpen}>
        {info.childs?.map((item) => (
          <FilesListItem
            key={item.id}
            info={item}
            activeActionsId={activeActionsId}
            setActiveActionsId={setActiveActionsId}
            deleteHandler={deleteHandler}
          />
        ))}
        {showAddItem ? <AddItem hideAddItemBox={hideAddItemBox} /> : null}
      </ChildsBox>
    </Box>
  );
};

export default FilesListItem;
