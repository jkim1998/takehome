import React, { useState, useEffect } from "react";
import "./styles.css";

const API = "https://jsonplaceholder.typicode.com/todos";

function App() {
  const [data, setData] = useState(null);

  const toggleComplete = (id, completed) => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, completed: !completed } : item
      )
    );
  };

  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      {data?.map((item) => {
        return (
          <div
            className={`container ${item.completed ? "strike" : ""}`}
            key={item.id}
          >
            <form>
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => toggleComplete(item.id, item.completed)}
              />
            </form>
            <p>userId: {item.userId}</p>
            <p>id: {item.id}</p>
            <p>title: {item.title}</p>
            <p>completed: {item.completed ? "true" : "false"}</p>
          </div>
        );
      })}
    </>
  );
}

export default App;
