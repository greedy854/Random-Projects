import classes from "./Input.module.css";

function Input() {
  return (
    <div className={classes.inputContainer}>
      <input
        placeholder="Add Item"
        className={`${classes.input}`}
        type="text"
        name="todo"
      />
      <i class="fa-solid fa-circle-plus fa-xl" style={{ color: "#004275" }}></i>
    </div>
  );
}

export default Input;
