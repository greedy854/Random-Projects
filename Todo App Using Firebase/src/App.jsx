import { useState } from "react";
import "./App.css";
import Input from "./UI/Input";

function App() {
  return (
    <>
      <div className="app-background">
        <Input />
        <hr />
        <div className="todoLists">
          <h2>To do</h2>
        </div>
        <div className="completedTodos">
          <h2>Completed</h2>
        </div>
      </div>
    </>
  );
}

export default App;
