import { Input } from "master-components";
import { Button } from "master-components";
import { OTPInput } from "master-components";
import "./App.css";
import { useState } from "react";

function App() {
  const [val, setValue] = useState("");
  const handleOTPChange = (otp: string) => {
    console.log(otp)
    setValue(otp);
  }
  return (
    <>
      {val}

      <Button label="Button" tooltipProps={{ content: "this is button tooltip", placement: "top" }} />
      {/* <div className="root"> */}
      <Button label="button with tooltip" tooltipProps={{ content: "this is button tooltip", placement: "top" }} />
      {/* </div> */}
      <Input value={val} onChange={(e) => setValue(e.target.value)} label="input" startIcon={<>Hii</>} endIcon={<>Hello</>} helperText="helper text" />
      <OTPInput value={val} onChange={handleOTPChange} numInputs={6} title="title" helperText="helper text" error="error" />
    </>
  );
}

export default App;
