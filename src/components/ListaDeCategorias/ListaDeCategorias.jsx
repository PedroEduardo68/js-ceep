import React, { Component } from "react";
import "./estilo.css";

class ListaDeCategorias extends Component {
  constructor() {
    super();
    this.state = { categoria: [] };
    this.referenciaNovaCategoria = this._novasCategorias.bind(this);
  }

  componentDidMount() {
    this.props.categorias.inscrever(this.referenciaNovaCategoria);
  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.referenciaNovaCategoria);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias })

  }
  _handleEventoInput(e) {
    //eslint-disable-next-line
    if (e.key == "Enter") {
      let valorCategoria = e.target.value;
      this.props.categorias.adicionarCategoria(valorCategoria);
    }
  }

  render() {
    return (
      <section className="lista-categorias">
        <ul className="lista-categorias_lista">
          {this.props.categorias.categorias.map((categoria, index) => {
            return <li key={index} className="lista-categorias_item"> {categoria} </li>;
          })}
        </ul>
        <input
          type="text"
          className="lista-categorias_input"
          placeholder="Adicionar Categoria"
          onKeyUp={this._handleEventoInput.bind(this)}
        />
      </section>
    );
  }
}

export default ListaDeCategorias;
