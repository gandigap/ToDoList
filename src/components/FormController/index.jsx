import React from 'react';
import { Formik, Field, Form } from 'formik';
import { useDispatch } from 'react-redux';

import { addTodo } from '@/store/actions';
import { buttonText, pageText } from '@/constant';

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
        onSubmit={(values, { resetForm }) => {
          if (values.toDo) {
            const dataTodo = {
              id: new Date().getTime(),
              text: values.toDo,
              isCompleted: false,
            };

            dispatch(addTodo(dataTodo));
            resetForm({ values: '' });
          }
        }}
      >
        <Form>
          <StyledFormLabel htmlFor="toDo">{pageText.action}</StyledFormLabel>
          <Field id="toDo" name="toDo" placeholder="Enter to do action" />
          <StyledFormButton type="submit">{buttonText.submit}</StyledFormButton>
        </Form>
      </Formik>
    </StyledFormController>
  );
};

export default FormController;
