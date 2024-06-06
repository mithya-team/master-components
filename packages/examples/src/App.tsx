import Input from "master-components/src/lib/core-components/Input";
import Button from "../../master-components/src/lib/core-components/Button"
import "./App.css";
import { useState } from "react";

function App() {
  const [val, setValue] = useState("");
  return (
    <>
      {val}
      <Button label="Button" toolTipProps={{ content: "this is button tooltip", placement: "right" }} />
      <div className="root">
        <Button label="button with tooltip" toolTipProps={{ content: "this is button tooltip", placement: "top" }} />
      </div>
      <Input value={val} onChange={(e) => setValue(e.target.value)} label="input" startIcon={<>Hii</>} endIcon={<>Hello</>} helperText="helper text" />
    </>
  );
}

export default App;
