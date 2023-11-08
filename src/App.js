import React from "react";
import './App.css';
import WithHooksForm from "./component/WithHooksForm.";
import WithoutHooksForm from "./component/WithoutHooksForm";
function App() {
  return (
    <div className="App">
     {<WithHooksForm />}
      {/* <WithoutHooksForm /> */}
    </div>
  );
}

export default App;
