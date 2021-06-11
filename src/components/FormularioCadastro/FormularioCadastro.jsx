import React, { Component } from "react";
import "./estilo.css";

class FormularioCadastro extends Component {



  constructor(props) {
    super(props);
    this.titulo = "";
    this.texto = "";
    this.categoria = "Sem Categoria";
    this.state = { categorias: [] };
    this.referenciaNovaCategoria = this._novasCategorias.bind(this);

  }


  componentDidMount() {
    this.props.categorias.inscrever(this.referenciaNovaCategoria);

  }

  componentWillUnmount() {
    this.props.categorias.desinscrever(this.referenciaNovaCategoria);
  }

  _novasCategorias(categorias) {
    this.setState({ ...this.state, categorias });
  }

  _handleMudancaTitulo(evento) {
    evento.stopPropagation();
    this.titulo = evento.target.value;
    //console.log(this.titulo);
  }

  _handleMudancaTexto(evento) {
    evento.stopPropagation();
    this.texto = evento.target.value;
    //console.log(this.texto);
  }

  _handleMudancaCategoria(evento) {
    evento.stopPropagation();
    this.categoria = evento.target.value;
    //console.log(this.texto);
  }



  _criarNota(evento) {
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);

  }




  render() {
    return (
      <form className="form-cadastro "
        onSubmit={this._criarNota.bind(this)}>

        <select
          onChange={this._handleMudancaCategoria.bind(this)}
          className="form-cadastro_input">
          <option>Sem Categoria</option>

          {this.state.categorias.map((categoria, index) => {
            return <option key={index} >{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
