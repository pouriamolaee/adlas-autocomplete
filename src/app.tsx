import Autocomplete from "./ui/autocomplete.tsx";
import { useState } from "react";

export default function App() {
  const [value, setValue] = useState("");

  return (
    <main className="w-screen h-screen flex justify-center items-center">
      <Autocomplete value={value} onChange={setValue} />
    </main>
  );
}
