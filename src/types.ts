export interface DataItemType {
  id: number;
  parentId: number | null;
  type: string;
  title: string;
};

export interface FormatedDataType {
  id: 1;
  parentId: null;
  type: "folder";
  title: string;
  childs: FormatedDataChildItemType[];
}

export interface FormatedDataChildItemType {
  id: number;
  parentId: number;
  type: "folder" | "file";
  title: string;
  childs: FormatedDataChildItemType[];
}
