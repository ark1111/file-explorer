import { useEffect, useState } from "react";
import { Box } from "./FilesExplorer.styled";
import { DataItemType, FormatedDataChildItemType } from "../types";
import FilesListItem from "./FilesListItem";
import { sampleData } from "../data";

type Props = {};

const FilesExplorer = (props: Props) => {
  const [data, setData] = useState<DataItemType[]>(sampleData);
  console.log(data);

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

  const findChildsIdsForDelete = (parentId: number) => {
    let list: number[] = [];
    for (let i = 0; i < data.length; i++) {
      if (data[i].parentId === parentId) {
        list.push(data[i].id);
        let childs = findChildsIdsForDelete(data[i].id);
        list = [...list, ...childs];
      }
    }
    return list;
  };

  const deleteHandler = (id: number) => {
    let newList = [...data];
    newList = newList.filter((item) => item.id !== id);
    let allChilds = findChildsIdsForDelete(id);
    newList = newList.filter((item) => !allChilds.includes(item.id));
    setData(newList);
  };

  const submitAddItem=(item:DataItemType)=>{
    let newList = [...data];
    newList.push(item);
    setData(newList);
  }

  return (
    <Box>
      {formatedData ? (
        <FilesListItem
          info={formatedData}
          activeActionsId={activeActionsId}
          setActiveActionsId={setActiveActionsId}
          deleteHandler={deleteHandler}
          submitAddItem={submitAddItem}
        />
      ) : null}
    </Box>
  );
};

export default FilesExplorer;
