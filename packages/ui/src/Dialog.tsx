import React from "react";
import { createStyle } from "@kaze-style/react";

const classes = createStyle({
  dialog: {
    border: ["1px", "solid", "black"],
    borderRadius: "0.5rem",
    padding: "16px",
    "&::backdrop": {
      opacity: 0.8,
      backgroundColor: "black",
    },
  },
});

type Props = {
  open: boolean;
};

export const Dialog = (props: Props) => {
  return (
    <dialog className={classes.dialog} open={props.open}>
      Open
    </dialog>
  );
};
