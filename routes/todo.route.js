const router = require('express').Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.getAllTodos)
router.post('/', todoController.createOneTodo)
router.get('/all', todoController.createManyTodo)
router.get('/:id', todoController.getSingleTodo)
router.put('/:id', todoController.updateOneTodo)
router.delete('/:id', todoController.deleteOneTodo)

module.exports = router;