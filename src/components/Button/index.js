import React from 'react';
import { default as StyledButton } from "@material-ui/core/Button";

export default function Button({text,type}) {
  return (
    <StyledButton
      type='submit'
      variant="contained"
      color="secondary"
      href="#contained-buttons"
    >{text}</StyledButton>
  );
}
