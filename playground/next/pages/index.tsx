import { Dialog } from "@kaze-ui/react";
import { useState } from "react";

export default function Home() {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(true)}>Open</button>
      <Dialog open={open} />
    </div>
  );
}
