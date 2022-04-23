/* eslint-disable no-promise-executor-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addToDoAction } from '../../store/actions';

const FormController = () => {
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        toDo: '',
      }}
      onSubmit={async (values) => {
        dispatch(addToDoAction(values.toDo));
      }}
    >
      <Form>
        <label htmlFor="toDo">To Do</label>
        <Field id="toDo" name="toDo" placeholder="Enter to do action" />
        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default FormController;
