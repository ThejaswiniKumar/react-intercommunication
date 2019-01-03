import React from "react";
import "./Add.css";

class ListClientes extends React.Component {
  editCliente(item) {
    this.props.editCliente(item);
  }
  render() {
    let clientes = this.props.clientes;
    console.log("client", cl);
    return (
      <div>
        <h1>ListClientes</h1>
        <ul>
          {clientes.map(item => (
            <li key={item.id}>
              <span
                className="cursorEdit"
                onClick={this.editCliente.bind(this, item)}
              >
                {item.text} - {item.id}
              </span>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ListClientes;
