import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas/";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaDeCategorias from "./components/ListaDeCategorias";
import "./assets/App.css";
import "./assets/index.css";
import Categorias from "./dados/categorias";
import ArrayDeNotas from "./dados/notas";

class App extends Component {
  constructor() {
    super();
    this.categorias = new Categorias();
    this.notas = new ArrayDeNotas();
    //this.state = {

    //notas: [],
    //      categorias: ["TRABALHO", "ESCOLA"],
    //};
  }
  /* 
  criarNota(titulo, texto, categoria) {
    const novaNota = { titulo, texto, categoria };
    const novoArrayNotas = [...this.state.notas, novaNota];
    const novoEstado = {
      notas: novoArrayNotas,
    };
    this.setState(novoEstado);
  } */

  /*   adicionarCategoria(nomeCategoria) {
    const novoArrayCategorias = [...this.state.categorias, nomeCategoria];
    const novoEstado = {
      ...this.state.categorias,
      categorias: novoArrayCategorias,
    };
    this.setState(novoEstado);
  }
 */
  /*   deletarNota(index) {
    let arrayNotas = this.state.notas;
    arrayNotas.splice(index, 1);
    this.setState({ notas: arrayNotas });
  } */

  render() {
    return (
      <section className="conteudo">
        <FormularioCadastro
          categorias={this.categorias}
          notas={this.notas}
          //criarNota={this.criarNota.bind(this)}
          criarNota={this.notas.adicionarNota.bind(this.notas)}
        />
        <main className="conteudo-principal">
          <ListaDeCategorias
            //adicionarCategoria={this.adicionarCategoria.bind(this)}
            adicionarCategoria={this.categorias.adicionarCategoria.bind(
              this.categorias
            )}
            categorias={this.categorias}
          />

          <ListaDeNotas
            //apagarNota={this.deletarNota.bind(this)}
            //notas={this.state.notas}
            apagarNota={this.notas.apagarNotas.bind(this.notas)}
            notas={this.notas}
          />
        </main>
      </section>
    );
  }
}

//react -> lib
//React -> ecossistema
export default App;
