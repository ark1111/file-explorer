import { useRef, useEffect } from "react";
import { Box, Button, Input } from "./AddItem.styled";

type Props = {
  hideAddItemBox: () => void;
};

const AddItem = ({ hideAddItemBox }: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });
  return (
    <Box>
      <Input ref={inputRef} />
      <Button src="/icons/ok-circle.svg" />
      <Button src="/icons/close-circle.svg" onClick={hideAddItemBox} />
    </Box>
  );
};

export default AddItem;
