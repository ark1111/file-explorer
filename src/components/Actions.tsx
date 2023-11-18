import React from "react";
import { BackSurface, Box, BoxItem } from "./Actions.styled";

type Props = {
  hideActionsHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  type: "file" | "folder";
  deleteFunction: () => void;
  addItemHandler: (type: "file" | "folder") => void;
  parentId: number | null;
};

const Actions = ({
  hideActionsHandler,
  type,
  deleteFunction,
  addItemHandler,
  parentId,
}: Props) => {
  return (
    <Box>
      <BackSurface onClick={(e) => hideActionsHandler(e)} />
      {type === "folder" ? (
        <BoxItem
          src="/icons/add-file.png"
          onClick={() => addItemHandler("file")}
        />
      ) : null}
      {type === "folder" ? (
        <BoxItem
          src="/icons/folder-new-filled.svg"
          onClick={() => addItemHandler("folder")}
        />
      ) : null}
      {parentId ? (
        <BoxItem src="/icons/delete.svg" onClick={deleteFunction} />
      ) : null}
    </Box>
  );
};

export default Actions;
