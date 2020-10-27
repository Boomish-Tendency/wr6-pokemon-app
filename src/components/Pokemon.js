import React, { Component } from "react";
import axios from "axios";

export default class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      pokemon: {
          sprites: {
              front_shiny: ''
          }
      },
      name: "",
    };
  }

  changeHandler(e){
      this.setState({
          [e.target.name]: e.target.value
      })
  }

  getPokemon(e) {
      e.preventDefault()
    const { name } = this.state;
    axios.get(`/api/pokemon/${name}`).then((pokemon) => {
      this.setState({
        pokemon: pokemon.data,
      });
    });
  }

  render() {
      console.log(this.state)
    return (
      <div>
        <div>Pokemon Component</div>
        <form onSubmit={(e) => this.getPokemon(e)}>
            <input name='name' type='text' onChange={(e)=>this.changeHandler(e)} />
            <input type='submit' value="submit" />
        </form>
    <div>Pokemon name: {this.state.pokemon.name}</div>
    <div>Pokemon weight: {this.state.pokemon.weight} KG</div>
    <img src={this.state.pokemon.sprites.front_shiny} />
      </div>
    );
  }
}
