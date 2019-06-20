import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropTypes from "prop-types";

export class Todos extends Component {
  render() {
    return this.props.todos.map(todo => (
      <TodoItem
        tod={todo}
        markComplete={this.props.markComplete}
        delTodo={this.props.delTodo}
        editTodo={this.props.editTodo}
      />
    ));
  }
}

Todos.propTypes = {
  todos: PropTypes.object.isRequired
};
export default Todos;

//tod is the prop for the TodoItem which is as a result of the result of what is being mapped from
//this.props.todo.map

//markComplete is a prop coming from todo in the App.js, so now we pass in another props in TodoItem

//map creeates a new array and it can be returbed
//the value of the component's prop is on that page most times...
