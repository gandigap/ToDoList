/* eslint-disable no-promise-executor-return */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';
import { addToDoAction } from '../../store/actions';
import {
  StyledFormButton,
  StyledFormController,
  StyledFormLabel,
} from './style';

const FormController = () => {
  const dispatch = useDispatch();
  return (
    <StyledFormController>
      <Formik
        initialValues={{
          toDo: '',
        }}
        onSubmit={async (values) => {
          const dataTodo = {
            id: new Date().getTime(),
            text: values.toDo,
            activeStatus: false,
          };
          dispatch(addToDoAction(dataTodo));
        }}
      >
        <Form>
          <StyledFormLabel htmlFor="toDo">Action</StyledFormLabel>
          <Field id="toDo" name="toDo" placeholder="Enter to do action" />
          <StyledFormButton type="submit">Submit</StyledFormButton>
        </Form>
      </Formik>
    </StyledFormController>
  );
};

export default FormController;
