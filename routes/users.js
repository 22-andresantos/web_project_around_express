const router = require('express').Router();

const {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  updateAvatar,
} = require('../controllers/users');

// Rota para obter todos os usuários
router.get('/', getUsers);

// Rota para obter um usuário específico por ID
router.get('/:userId', getUserById);

// Rota para criar um novo usuário
router.post('/', createUser);

// Rota para atualizar um usuário específico
router.patch('/:userId', updateUser);

// Rota para atualizar o avatar de um usuário específico
router.patch('/:userId/avatar', updateAvatar);

module.exports = router;
