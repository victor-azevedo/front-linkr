/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useRef, useState } from "react";

import axios from "axios";
import styled from "styled-components";

import { useUserData } from "../../hooks/useUserData";

import { ENTER_KEY, ESC_KEY } from "../../constants/constants";

export default function LinkTextEditor({
  setEditTextInput,
  isTextEditable,
  setIsTextEditable,
  editTextInput,
  text,
  id,
}) {
  const { userData } = useUserData();
  const [loadingEdition, setLoadingEdition] = useState(false);
  const [editAPIAccepted, setEditAPIAccepted] = useState(false);

  const inputRef = useRef(null);

  function handleKeyEvent(e) {
    if (e.keyCode === ESC_KEY) {
      setIsTextEditable(false);
    }
    if (e.keyCode === ENTER_KEY) {
      if (editTextInput === text) {
        setIsTextEditable(false);
        return;
      }
      setLoadingEdition(true);
      axios
        .put(
          `${process.env.REACT_APP_BASE_URL}/linkrs/edit/${id}`,
          { updatedText: editTextInput },
          userData.requestConfig
        )
        .then((res) => {
          text = editTextInput;
          setEditAPIAccepted(true);
          setLoadingEdition(false);
          setIsTextEditable(false);
        })
        .catch((err) => {
          alert("Couldn't complete request");
          setLoadingEdition(false);
        });
    }
  }

  useEffect(() => {
    const { current } = inputRef;
    if (isTextEditable) {
      current.focus();
    } else {
      setEditTextInput(editAPIAccepted ? editTextInput : text);
    }
  }, [isTextEditable]);

  return (
    <TextEditor
      type="text"
      onKeyDown={handleKeyEvent}
      ref={inputRef}
      disabled={loadingEdition}
      value={editTextInput}
      onChange={(e) => {
        setEditTextInput(e.target.value);
      }}
    />
  );
}

const TextEditor = styled.input`
  width: 100%;
  font-size: 17px;
  line-height: 20px;
  font-weight: 400;
  margin-top: 10px;
  word-break: break-all;
  padding: 5px;
  border-radius: 7px;
  color: #4c4c4c;
  font-family: "Lato", sans-serif;
  border: 0;
  &:focus {
    outline: 0;
  }
`;
