import React from "react";

class EditCliente extends React.Component {
  constructor(props) {
    super(props);
    this.onChangeEdit = this.onChangeEdit.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onSubmit(e) {
    e.preventDefault();
    var text = this.refs.text.value.trim();
    var testeText = this.refs.text;

    if (!text) {
      alert("Por favor digite um nome");
      return;
    }

    if (this.props.isEdit) {
      var updateTodo = {
        id: this.props.isEdit,
        text: text
      };
      this.props.onTodoUpdate(updateTodo);
      console.log("is Updated...");
    } else {
      this.props.onClienteAdd(text);
      // console.log('is Created...');
    }
  }
  onChangeEdit(e) {
    this.props.changeTextEdit(e.target.value);
  }
  render() {
    return (
      <div>
        <h1>Editar Cliente</h1>
        <form onSubmit={this.onSubmit}>
          <label>
            Nome:
            <input
              type="text"
              placeholder="editar o nome"
              ref="text"
              value={this.props.text}
              onChange={this.onChangeEdit}
              required
            />
            <input type="submit" value="submit" />
          </label>
        </form>
      </div>
    );
  }
}

export default EditCliente;
