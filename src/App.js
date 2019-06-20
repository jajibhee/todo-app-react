import React, { Fragment, Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";
import About from "./components/About";
import * as uuid from "uuid/v1";
import "./App.css";

export class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: "Learn React with Mosh",
        completed: false
      },
      {
        id: 2,
        title: "Revise React with Tobi at Kobo",
        completed: false
      },
      {
        id: 3,
        title: "Party after eating dinner",
        completed: false
      }
    ],
    input: "",
    editId: null
  };

  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
  };

  editTodo = id => {
    // console.log(this.state.todos);
    let todo = this.state.todos.filter(data => data.id === id);
    console.log(todo[0].title);
    this.setState({
      input: todo[0].title,
      editId: id
    });
  };

  //When the form is submitted, it should fire the addTodo function event so addTodo can be called in AddTod componennt and gets an argument.
  addTodo = title => {
    const newTodo = {
      id: this.state.editId ? this.state.editId : uuid(),
      title: title,
      // title, es6 style
      completed: false
    };

    if (this.state.editId) {
      this.setState(
        state => {
          const todos = state.todos.map(todo => {
            if (todo.id === this.state.editId) {
              todo.title = title;
            }
          });
          return todos;
        },
        () => {
          this.setState({
            editId: null
          });
        }
      );
    } else {
      this.setState({ todos: [...this.state.todos, newTodo] });
    }
  };

  render() {
    console.log(this.state.todos);
    return (
      <Router>
        <div>
          <div className="container">
            <Header />
            <Route
              exact
              path="/"
              render={props => (
                <Fragment>
                  <AddTodo
                    addTodo={this.addTodo}
                    inputText={this.state.input}
                  />
                  <Todos
                    todos={this.state.todos}
                    markComplete={this.markComplete}
                    delTodo={this.delTodo}
                    editTodo={this.editTodo}
                  />
                </Fragment>
              )}
            />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}
export default App;

//We create it in the app place, we pass it down in its component with its key and value, then we access the values in its component and re use it
//Since we have more than one component, we use render props in the router block.

//we'll be needing markcomplete and deltodo in the todoitems so we pass it as props here and then pass it in as props in the Todo file
//under TodoItem.js,
