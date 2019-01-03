import React from "react";
import EditCliente from "./EditCliente";
import ListClientes from "./ListClientes";

class FormCliente extends React.Component {
  constructor(props) {
    super(props);
    this.handleEditCliente = this.handleEditCliente.bind(this);
    this.handleChangeTextEdit = this.handleChangeTextEdit.bind(this);
    this.handleClienteAdd = this.handleClienteAdd.bind(this);
    this.handleTodoUpdate = this.handleTodoUpdate.bind(this);
    this.state = {
      text: "",
      isEdit: 0,
      todos: [
        { id: 1, text: "Bryan OSpring" },
        { id: 2, text: "Mathew Jose" },
        { id: 3, text: "Ruan Carlos Sobotta" }
      ]
    };
  }

  handleEditCliente(item) {
    this.setState({
      text: item.text,
      isEdit: item.id
    });
  }
  handleChangeTextEdit(text) {
    this.setState({ text: text });
  }
  handleClienteAdd(text) {
    var newText = {
      id: this.state.todos.length + 1,
      text: text
    };
    this.setState({
      todos: this.state.todos.concat(newText),
      text: ""
    });
  }
  handleTodoUpdate(todo) {
    var todos = this.state.todos;
    for (var i = 0; i < todos.length; i++) {
      if (todos[i].id == todo.id) {
        todos.splice(i, 1);
      }
    }
    todos.push(todo);
    this.setState({
      todos: todos,
      text: "",
      isEdit: 0
    });
  }
  render() {
    return (
      <div>
        <ListClientes
          clientes={this.state.todos}
          editCliente={this.handleEditCliente}
        />
        <hr />
        <EditCliente
          onClienteAdd={this.handleClienteAdd}
          {...this.state}
          changeTextEdit={this.handleChangeTextEdit}
          onTodoUpdate={this.handleTodoUpdate}
        />
      </div>
    );
  }
}

export default FormCliente;
