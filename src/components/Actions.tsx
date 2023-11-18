import React from "react";
import { BackSurface, Box, BoxItem } from "./Actions.styled";

type Props = {
  hideActionsHandler: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  type: "file" | "folder";
};

const Actions = ({ hideActionsHandler, type }: Props) => {
  return (
    <Box>
      <BackSurface onClick={(e) => hideActionsHandler(e)} />
      {type === "folder" ? <BoxItem src="/icons/add-file.png" /> : null}
      {type === "folder" ? (
        <BoxItem src="/icons/folder-new-filled.svg" />
      ) : null}
      <BoxItem src="/icons/delete.svg" />
    </Box>
  );
};

export default Actions;
