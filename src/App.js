import React, { Component } from "react";
import { v4 as uuidv4 } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";

//showing vscode github setup
class App extends Component {
  state = {
    item: [
      { id: 1, title: "Wake up" },
      { id: 2, title: "Make Breakfast" },
    ],
    id: uuidv4(),
    item: "",
    editItem: false,
  };

  handleChange = (e) => {
    console.log("change");
  };
  handleSubmit = (e) => {
    console.log("Submit");
  };
  ClearList = (e) => {
    console.log("clear list");
  };
  handleDelete = (e) => {
    console.log("Delete");
  };
  handleEdit = (e) => {
    console.log("Edit");
  };

  render() {
    console.log(this.state);

    return (
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-5">
            <h3 className="text-capitalize text-center">Todo Input</h3>
            <TodoInput
              item={this.state.item}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
              editItem={this.state.editItem}
            />
            <TodoList
              items={this.state.items}
              ClearList={this.ClearList}
              handleDelete={this.handleDelete}
              handleEdit={this.handleEdit}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
