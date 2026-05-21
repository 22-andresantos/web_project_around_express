const router = require('express').Router();

const {
  getCards,
  createCard,
  deleteCard,
  likeCard,
  dislikeCard,
} = require('../controllers/cards');

// Rota para obter todos os cartões
router.get('/', getCards);

// Rota para criar um novo cartão
router.post('/', createCard);

// Rota para excluir um cartão específico
router.delete('/:cardId', deleteCard);

// Rota para curtir um cartão
router.put('/:cardId/likes', likeCard);

// Rota para descurtir um cartão
router.delete('/:cardId/likes', dislikeCard);

module.exports = router;
