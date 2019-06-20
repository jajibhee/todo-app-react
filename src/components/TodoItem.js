import React, { Component } from "react";
import PropTypes from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      borderBottom: "2px solid white",
      padding: "0.5rem",
      textDecoration: this.props.tod.completed ? "line-through" : "none"
    };
  };

  //tod is the one bringing in all the state properties from Todos which has todo props===> this.props.todos={this.state.todos}
  //this.props.markComplete is from the props markComplete in Todos.js
  render() {
    const { id, title } = this.props.tod;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={() => this.props.markComplete(id)} />
          {title}
          <button style={btnStyle} onClick={() => this.props.delTodo(id)}>
            X
          </button>
          <button style={btnStyle} onClick={() => this.props.editTodo(id)}>
            Edit
          </button>
        </p>
      </div>
    );
  }
}

TodoItem.propTypes = {
  tod: PropTypes.object.isRequired,
  markComplete: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired
};

const btnStyle = {
  background: "#fff",
  color: "red",
  border: "none",
  padding: "5px 8px",
  marginLeft: "16px",
  fontWeight: "bolder",
  outline: "none",
  cursor: "pointer",
  borderRadius: "50%",
  float: "right"
};
export default TodoItem;

//The bind is binding the this.props.tod.id with the delTodo prop so it can be used in the App.js
