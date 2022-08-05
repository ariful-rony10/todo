const mongoose = require('mongoose')
const Todo = require('../models/todo.model')
// GET all todos
const getAllTodos = async (req, res) => {
    try {
        const result = await Todo.find()
        res.status(200).json({ message: "Displayed all todos!", data: result })
    } catch (error) {
        res.status(500).json({ message: "Can't get all todos! - please try again later." })
    }
}

// GET a todo by ID
const getSingleTodo = async (req, res) => {
    try {
        const result = await Todo.findById({ _id: req.params.id })
        res.status(200).json({ message: "Found sucessfully!", data: result })
    } catch (error) {
        res.status(500).json({ message: "Can't found the todo! - please try again later." })

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
const createManyTodo = async (req, res) => {
    try {
        const result = await Todo.insertMany(req.body)
        res.status(200).json({ message: "Insertion of many is completed!", data: result })
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
const deleteOneTodo = async (req, res) => {
    try {
        await Todo.findByIdAndDelete(req.params.id)
        res.status(200).json({ message: "Todo deleted sucessfully!" })
    } catch (error) {
        res.status(500).json({ message: "Can't delete todo! - please try again later." })

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
