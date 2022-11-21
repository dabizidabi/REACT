import { useState, useRef } from "react";
import useScroll from "../hooks/useScroll";

const List = () => {
  const [todoList, setTodoList] = useState([]);
  const [page, setPage] = useState(1);
  const limit = 10;

  const parentRef = useRef();
  const childRef = useRef();

  const intersected = useScroll(parentRef, childRef, () =>
    getData(page, limit),
  );

  const getData = (page, limit) => {
    fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`,
    )
      .then((newData) => newData.json())
      .then((newData) => {
        setTodoList([...todoList, ...newData]);
        setPage((prevPage) => prevPage + 1);
      });
  };

  return (
    <div ref={parentRef} style={{ height: "80vh", overflow: "auto" }}>
      {todoList.map((todo) => {
        return (
          <div
            key={todo.id}
            style={{ padding: "50px", border: "1px solid black" }}
          >
            {todo.id}. {todo.title}
          </div>
        );
      })}
      <div ref={childRef} style={{ height: "20px", background: "white" }} />
    </div>
  );
};

export default List;
