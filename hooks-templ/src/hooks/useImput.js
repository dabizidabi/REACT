import { useState } from "react";

export default function useInput(initValue, typeVal) {
  const [value, setValue] = useState(initValue);
  const type = typeVal;

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange, type };
}
