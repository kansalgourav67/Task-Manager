const express = require('express')

const {db} = require('./db')

const todoRoute = require('./Routes/todos')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use(express.json())

app.use('/todos', todoRoute)

db.sync()
  .then(() => {
    app.listen(9876)
  })

  .catch((err) => {
    console.error(err)
  })