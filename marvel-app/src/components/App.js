import { useState } from "react";
import Button from "./Greet";

const App = () => {
  const [counter, setCounter] = useState(0);

  const plus = () => setCounter(counter => counter + 1);
  const minus = () => setCounter(counter => counter - 1);


  return (
    <>
      <Button minus={minus} plus={plus} counter={counter}/>
    </>
  );
}

export default App;