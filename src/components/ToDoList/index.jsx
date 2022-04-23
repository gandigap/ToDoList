import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const ToDoList = () => {
  const [list, setList] = useState();

  const { toDoList } = useSelector((state) => state.toDoState);

  useEffect(() => {
    setList(toDoList);
  }, [toDoList]);

  const listToRender = () =>
    list && list.map((el, index) => <div key={index}>asda</div>);

  return <div>{listToRender()}</div>;
};

export default ToDoList;
