/* eslint-disable implicit-arrow-linebreak */
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import ToDoListItem from './ToDoListItem';

const ToDoList = () => {
  const [list, setList] = useState();

  const { toDoList } = useSelector((state) => state.toDoState);

  useEffect(() => {
    setList(toDoList);
  }, [toDoList]);

  const listToRender = () =>
    list && list.map((el) => <ToDoListItem key={el.id} dataTodo={el} />);

  return <div>{listToRender()}</div>;
};

export default ToDoList;
