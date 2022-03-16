import React from 'react';
import PropTypes from 'prop-types';

TodoList.propTypes = {
  todoList: PropTypes.array,
};
TodoList.defaultProps = {
  todoList: [],
};

function TodoList(props) {
  const { todoList } = props;
  return (
    <div>
      {todoList.map((todo, index) => (
        <li key={index}>
          {todo.userName}---{todo.title}
        </li>
      ))}
    </div>
  );
}

export default TodoList;
