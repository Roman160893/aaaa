const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const appPort = 7777;
const mongoUrl = 'mongodb+srv://demchukR:demchukR@cluster0.7eydhun.mongodb.net/?retryWrites=true&w=majority';

const app = express();
app.use(bodyParser.json());
app.use(cors());

const corsOptions = {
   origin: "http://localhost:3000",
   optionsSuccessStatus: 200
}


//Model-users 

const UsersSchema = new mongoose.Schema(
   {
      userName: String,
      userNickName: String,
      userAvatar: String
   }
)

mongoose.model('Users', UsersSchema)
const Users = mongoose.model('Users')

//Controller-user

const getAll = (req, res) => {
   Users.find()
      .exec()
      .then(users => res.json(users))
      .catch(err => res.status(500).json(err))
}

const create = (req, res) => {
   Users.create(req.body)
      .then(createUser => res.json(createUser))
      .catch(err => res.status(500).json(err))
}


// Routes-user

app.get('/users', cors(corsOptions), getAll)
app.post('/addUser', cors(corsOptions), create)



//Model-news

const NewsSchema = new mongoose.Schema(
   {
      newsTitle: String,
      newsPicture: String,
      newsText: String,
      newsDate: String,
   }
)

mongoose.model('News', NewsSchema)
const News = mongoose.model('News')

//Controller-news

const getAllNews = (req, res) => {
   News.find()
      .exec()
      .then(news => res.json(news))
      .catch(err => res.status(500).json(err))
}

const createNews = (req, res) => {
   News.create(req.body)
      .then(createNew => res.json(createNew))
      .catch(err => res.status(500).json(err))
}

const updateNews = (req, res) => {
   News.updateOne({ _id: req.params.id }, { $set: req.body })
      .exec()
      .then((news) => res.json(news))
      .catch(err => res.status(500).json(err))
}

const removeNews = (req, res) => {
   News.deleteOne({ _id: req.params.id })
      .exec()
      .then(() => res.json({ success: true }))
      .catch(err => res.status(500).json(err))
}

// Routes-news

app.get('/news', cors(corsOptions), getAllNews)
app.post('/addNews', cors(corsOptions), createNews)
app.put('/news/:id', cors(corsOptions), updateNews)
app.delete('/news/:id', cors(corsOptions), removeNews)


mongoose.connect(mongoUrl, { useNewUrlParser: true, useUnifiedTopology: true })
   .then(() => app.listen(
      appPort,
      () => console.log(`Listening on port ${appPort}...`)
   ))
   .catch(err => console.error(`Error connecting to mongo: ${mongoUrl}`, err))