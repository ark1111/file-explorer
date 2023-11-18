import React, { useRef, useEffect, useState } from "react";
import { Box, Button, ErrorText, Input } from "./AddItem.styled";

type Props = {
  hideAddItemBox: () => void;
  isDuplicatedTitleError: boolean;
  submitAddItemHandler: (title: string) => void;
  setIsDuplicatedTitleError: React.Dispatch<React.SetStateAction<boolean>>;
};

const AddItem = ({
  hideAddItemBox,
  isDuplicatedTitleError,
  submitAddItemHandler,
  setIsDuplicatedTitleError,
}: Props) => {
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [title, setTitle] = useState("");

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setIsDuplicatedTitleError(false);
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  });

  return (
    <>
      <Box>
        <Input ref={inputRef} value={title} onChange={(e) => changeTitle(e)} />
        <Button
          src="/icons/ok-circle.svg"
          onClick={() => submitAddItemHandler(title)}
        />
        <Button src="/icons/close-circle.svg" onClick={hideAddItemBox} />
      </Box>
      {isDuplicatedTitleError ? (
        <ErrorText>This title is duplicated in this directory</ErrorText>
      ) : null}
    </>
  );
};

export default AddItem;
