import { useState } from "react";
import { Box } from "./FilesExplorer.styled";
import { DataItemType, FormatedDataChildItemType } from "../types";
import FilesListItem from "./FilesListItem";

type Props = {};

const sampleData: FormatedDataChildItemType = {
  id: 1,
  parentId: null,
  title: "Root",
  type: "folder",
  childs: [
    {
      id: 2,
      parentId: 1,
      title: "A",
      type: "folder",
      childs: [],
    },
    {
      id: 3,
      parentId: 1,
      title: "B",
      type: "folder",
      childs: [
        {
          id: 4,
          parentId: 3,
          title: "B1.txt",
          type: "file",
          childs: [],
        },
      ],
    },
  ],
};

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

  const [formatedData, setFormatedData] = useState<FormatedDataChildItemType>();

  return (
    <Box>
      <FilesListItem info={sampleData} />
    </Box>
  );
};

export default FilesExplorer;
