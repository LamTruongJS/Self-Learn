import React from 'react';
import PropTypes from 'prop-types';
import InputField from '../../../components/form-control/InputField';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
TodoForm.propTypes = {
  onSubmit: PropTypes.func,
};
TodoForm.defaultProps = {
  onSubmit: null,
};

function TodoForm(props) {
  const { onSubmit } = props;
  const schema = yup.object({
    userName: yup.string().required('Please enter name').min(5, 'Name is too sort'),
    title: yup.string().required('Please enter title'),
  });

  const form = useForm({
    defaultValues: {
      userName: '',
      title: '',
    },
    resolver: yupResolver(schema),
  });
  const handleSubmit = (values) => {
    console.log('Todo Form: ', values);
    onSubmit(values);
  };
  return (
    <form onSubmit={form.handleSubmit(handleSubmit)}>
      <InputField name="userName" label="User Name" form={form} />
      <InputField name="title" label="Title" form={form} />
      <input type="submit" />
    </form>
  );
}

export default TodoForm;
