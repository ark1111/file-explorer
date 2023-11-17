import { useState } from "react";
import { Box } from "./FilesExplorer.styled";

type Props = {};

const FilesExplorer = (props: Props) => {
  const [data, setData] = useState<
    {
      id: number;
      parentId: number | null;
      type: string;
      title: string;
    }[]
  >([
    {
      id: 1,
      parentId: null,
      type: "folder",
      title: "Root",
    },
  ]);
  
  return <Box></Box>;
};

export default FilesExplorer;
