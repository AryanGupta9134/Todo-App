import React, { useState } from "react";
import "./App.css";
import Todoinput from "./Components/Todoinput";
import TodoList from "./Components/TodoList";

function App() {
  const [listTodo, setlistTodo] = useState([]);
  let addList = (inpuText) => {
    if (inpuText !== "") setlistTodo([...listTodo, inpuText]);
  };
  const deleteListitem = (key) => {
    let newListTodo = [...listTodo];
    newListTodo.splice(key, 1);
    setlistTodo([...newListTodo]);
  };
  return (
    <div>
      <div className="main-container">
        <div className="center-container">
          <Todoinput addList={addList} />
          <h2 className="app-heading ">TODO List</h2>
          <hr />
          {listTodo.map((listItem, i) => {
            return (
              <TodoList
                key={i}
                item={listItem}
                deleteitem={deleteListitem}
                index={i}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
