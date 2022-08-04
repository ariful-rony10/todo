const mongoose = require('mongoose')
const Todo = require('../models/todo.model')
// GET all todos
const getAllTodos = (req, res) => {
    try {

        res.status(200).json()
    } catch (error) {
        res.status(500).json({ message: "Can't get all todos! - please try again later." })

    }
}

// GET a todo by ID
const getSingleTodo = (req, res) => {
    try {

        res.status(200).json()
    } catch (error) {
        res.status(500).json({ message: "Can't get all todos! - please try again later." })

    }
}

// POST a todo
const createOneTodo = async (req, res) => {
    try {
        const createTodo = new Todo(req.body)

        await createTodo.save()

        res.status(200).json({
            message: "Todo inserted sucessfully!"
        })
    } catch (error) {
        res.status(500).json({ message: "Can't create a todo! - please try again later." })
    }
}

// POST Multiples todos
const createManyTodo = (req, res) => {
    try {


        res.status(200).json()
    } catch (error) {
        res.status(500).json({ message: "Can't get all todos! - please try again later." })

    }
}

// Update a todo
const updateOneTodo = async (req, res) => {
    try {
        const result = await Todo.findByIdAndUpdate(
            { _id: req.params.id },
            {
                $set:
                {
                    status: "inactive"
                }
            },
            { new: true }
        )
        // console.log(result);
        res.status(200).json({ message: "Updated sucessfully!", data: result })
    } catch (error) {
        res.status(500).json({ message: "Opps! cant update todo - please try again later." })

    }
}

// DELETE a todo
const deleteOneTodo = (req, res) => {
    try {

        res.status(200).json()
    } catch (error) {
        res.status(500).json({ message: "Can't get all todos! - please try again later." })

    }
}

module.exports = {
    getAllTodos,
    getSingleTodo,
    createOneTodo,
    createManyTodo,
    updateOneTodo,
    deleteOneTodo
}
