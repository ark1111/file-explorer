import { useState } from "react";
import { Box } from "./FilesExplorer.styled";
import { DataItemType, FormatedDataType } from "../types";

type Props = {};

const FilesExplorer = (props: Props) => {
  const [data, setData] = useState<DataItemType[]>([
    {
      id: 1,
      parentId: null,
      type: "folder",
      title: "Root",
    },
    {
      id: 2,
      parentId: 1,
      type: "folder",
      title: "A",
    },
    {
      id: 3,
      parentId: 1,
      type: "folder",
      title: "B",
    },
    {
      id: 4,
      parentId: 2,
      type: "folder",
      title: "A-1",
    },
  ]);

  const [formatedData, setFormatedData] = useState<FormatedDataType>();

  return <Box></Box>;
};

export default FilesExplorer;
