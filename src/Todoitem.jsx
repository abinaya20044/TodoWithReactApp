import propTypes from "prop-types";

const TodoItem = ({ todo, removeTaskWithIndex, index }) => {
  //Functions
  const handleButtonClick = () => {
    removeTaskWithIndex(index);
  };
  return (
    <li>
      {todo} <button onClick={handleButtonClick}>click</button>
    </li>
  );
};

//Prop Types
TodoItem.propTypes = {
  todo: propTypes.string.isRequired,
  removeTaskWithIndex: propTypes.func.isRequired,
  index: propTypes.number.isRequired,
};
  

export default TodoItem;