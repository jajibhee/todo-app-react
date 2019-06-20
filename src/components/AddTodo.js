import React, { Component } from "react";
import PropTypes from "prop-types";

export class AddTodo extends Component {
  state = {
    title: this.props.inputText
  };

  componentDidUpdate(prev) {
    if (prev.inputText !== this.props.inputText) {
      this.setState({
        title: this.props.inputText
      });
    }
  }

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  onSubmit = e => {
    e.preventDefault();
    //call the addTodo function and pass in the title that is being put in
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };
  render() {
    const { title } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit} style={inputStyle} action="">
          <input
            name="title"
            style={{ flex: "8", padding: "1rem" }}
            type="text"
            placeholder="Add Todo..."
            defaultValue={this.props.inputText}
            value={title}
            onChange={this.onChange}
          />
          <input
            type="submit"
            value="Submit"
            className="btn"
            style={{
              flex: "1",
              fontSize: "1rem",
              padding: "1rem",
              backgroundColor: "red"
            }}
          />
        </form>
      </div>
    );
  }
}

const inputStyle = {
  display: "flex",
  outline: "none",
  alignItems: "center",
  border: "none",
  padding: ".5rem"
};

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
};
export default AddTodo;

//[e.target.name] is targetting the value of the name attribute === this.state.[e.target.name]. So, after title, we have email in the state and
//it's empty, we will have the name as email. So that way, the value of the setState will be email and it'll be eqUAL to the value of the
//
