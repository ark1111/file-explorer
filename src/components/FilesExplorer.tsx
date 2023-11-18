import { useEffect, useState } from "react";
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
      childs: [
        {
          id: 6,
          parentId: 2,
          title: "A1.js",
          type: "file",
          childs: [],
        },
        {
          id: 7,
          parentId: 2,
          title: "A2.html",
          type: "file",
          childs: [],
        },
      ],
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
        {
          id: 5,
          parentId: 3,
          title: "B2.css",
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
      title: "test",
    },
    {
      id: 5,
      parentId: 4,
      type: "file",
      title: "test1.js",
    },
    {
      id: 6,
      parentId: 4,
      type: "file",
      title: "test1.css",
    },
    {
      id: 7,
      parentId: 3,
      type: "file",
      title: "B1.html",
    },
    {
      id: 8,
      parentId: 3,
      type: "file",
      title: "B2.txt",
    },
    {
      id: 9,
      parentId: 2,
      type: "file",
      title: "A1.txt",
    },
    {
      id: 10,
      parentId: 1,
      type: "folder",
      title: "C",
    },
    {
      id: 11,
      parentId: 10,
      type: "file",
      title: "C1.svg",
    },
    {
      id: 11,
      parentId: 10,
      type: "file",
      title: "C2.png",
    },
  ]);

  const [formatedData, setFormatedData] =
    useState<FormatedDataChildItemType | null>();

  const [activeActionsId, setActiveActionsId] = useState<number | null>(null);

  const findChilds = (parentId: number) => {
    let newList = [];
    for (let i = 0; i < data?.length; i++) {
      if (data[i].parentId === parentId) {
        let childs = findChilds(data[i].id);
        let newObj: FormatedDataChildItemType = {
          ...data[i],
          childs,
        } as FormatedDataChildItemType;
        newList.push(newObj);
      }
    }
    return newList;
  };

  const createFormatedData = () => {
    let newData = null;
    for (let i = 0; i < data?.length; i++) {
      //find root folder
      if (data[i].parentId === null) {
        let childs = findChilds(data[i].id);
        newData = { ...data[i], childs } as FormatedDataChildItemType;
      }
    }
    setFormatedData(newData);
  };

  useEffect(() => {
    createFormatedData();
  }, [data]);

  return (
    <Box>
      {formatedData ? (
        <FilesListItem info={formatedData} activeActionsId={activeActionsId} setActiveActionsId={setActiveActionsId}/>
      ) : null}
    </Box>
  );
};

export default FilesExplorer;
