const axios = require('axios')

module.exports = {
    // getAllPokemon: (req, res) => {
    //     console.log('getAllPokemon was hit')
    //     res.sendStatus(200)
    // },

    getPokemonByName: (req, res) => {
        const { name } = req.params
        console.log('getPokemonByName was hit', name)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`).then(pokemon => {
            res.status(200).send(pokemon.data)
        })
        
    },

    // getPokemonByID: (req, res ) => {
    //     console.log('getPokemonByID was hit', id)

    // },

    // sendingDataExample: (req, res) => {
    //     console.log("params",req.params)
    //     console.log("query",req.query)
    //     console.log("body",req.body)
    // }
}