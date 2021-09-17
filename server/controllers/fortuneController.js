const axios = require('axios');

const fortunes = [
    'Your career will be bountiful!',
    'You will find the love of your life at Taco Bell!',
    "Don't order the chicken fried rice!",
    "love of my life is a grilled cheese burrito, so if they put that back on the menu this fortune checks out",
    "You will learn CSS soon",
    "Don't drop that dun da dun"
]

let favColor = '#fff'

module.exports = {
    getFortune: (req, res) => {
        const randIndex = Math.floor(Math.random() * fortunes.length)
        let fortune = fortunes[randIndex]
        res.status(200).send(fortune)
    },
    addFortune: (req, res) => {
        console.log('is this not working')
        console.log(req.body)
        const { value } = req.body
        fortunes.push(value)

        res.status(200).send(fortunes)
    },
    getFavColor: (req, res) => {
        res.status(200).send(favColor);
    },
    changeColor: (req, res) => {
        const { color } = req.body
        favColor = color
        res.status(200).send(favColor)
    },
    getPokemon: async (req, res) => {

        axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
            .then(res2 => {
                console.log(res2.data)
                res.status(200).send(res2.data)
            })
            .catch(err => {
                res.status(409).send(err)
            })
    }
}