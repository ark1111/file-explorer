export interface DataItemType {
  id: number;
  parentId: number | null;
  type: string;
  title: string;
}

export interface FormatedDataChildItemType {
  id: number;
  parentId: number | null;
  type: "folder" | "file";
  title: string;
  childs: FormatedDataChildItemType[];
}
