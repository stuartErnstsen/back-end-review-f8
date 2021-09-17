const express = require("express");
const cors = require("cors");
const app = express();

const fortuneCtrl = require('./controllers/fortuneController.js')


app.use(cors());

app.use(express.json()); // When we want to be able to accept JSON.

app.get("/api/compliment", (req, res) => {
  const compliments = ["Gee, you're a smart cookie!",
    "Cool shirt!",
    "Your Javascript skills are stellar.",
  ];
  // choose random compliment
  let randomIndex = Math.floor(Math.random() * compliments.length);
  let randomCompliment = compliments[randomIndex];

  res.status(200).send(randomCompliment);
});


app.get('/api/fortune', fortuneCtrl.getFortune)
app.post('/api/fortune', fortuneCtrl.addFortune)

app.get('/api/color', fortuneCtrl.getFavColor)
app.put('/api/color', fortuneCtrl.changeColor)

app.get('/api/poke', fortuneCtrl.getPokemon)

app.listen(4000, () => console.log("Server running on 4000"));
