import { TextField } from "@mui/material";
import React, { useState } from "react";

export default function InputForm({ handleResponse }) {
  const [input, setInput] = useState("");
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const resetInput = () => {
    setInput("");
  };
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleResponse(input);
          resetInput();
        }}
      >
        <TextField
          value={input}
          placeholder="Enter Github username"
          onChange={handleChange}
        ></TextField>
      </form>
    </>
  );
}
