import Input from "master-components/src/lib/core-components/Input";
import Button from "../../master-components/src/lib/core-components/Button"
import "./App.css";
import { useState } from "react";

function App() {
  const [val, setValue] = useState("");
  return (
    <>
      {val}

      <Button label="Button" tooltipProps={{ content: "this is button tooltip", placement: "top" }} />
      <div className="root">
        <Button label="button with tooltip" tooltipProps={{ content: "this is button tooltip", placement: "top" }} />
      </div>
      <Input value={val} onChange={(e) => setValue(e.target.value)} label="input" startIcon={<>Hii</>} endIcon={<>Hello</>} helperText="helper text" />
    </>
  );
}

export default App;
