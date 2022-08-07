require('dotenv').config()
const express = require('express');

const mongoose = require('mongoose');

const userRoutes = require('./routes/user.route')
const todoRoutes = require('./routes/todo.route')
const routeDontExitsHandler = require('./errorHandlers/routeDontExistsHandler')
const errorHandler = require('./errorHandlers/errorHandler')

// Initialize express as an app
const app = express();
const PORT = process.env.PORT || 8000;
// Connect to database
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log(`Connection with database established!`))
    .catch((err) => console.log(err))
// View engine


// Middlewares
app.use(express.json())

//Routes
app.use('/api/v1/user', userRoutes)
app.use('/api/v1/todo', todoRoutes)

// Error handler
app.use(routeDontExitsHandler)
app.use(errorHandler)

// Listening
app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))