const router = require('express').Router()
const todoController = require('../controllers/todo.controller')

router.get('/', todoController.getAllTodos)
router.post('/', todoController.createOneTodo)
router.get('/:id', todoController.getSingleTodo)
router.put('/:id', todoController.updateOneTodo)
router.delete('/:id', todoController.deleteOneTodo)
router.get('/all', todoController.createManyTodo)

module.exports = router;