const express = require('express')

const MessageCtrl = require('../controllers/message-ctrl.js');

const router = express.Router();

router.post('/message', MessageCtrl.createMessage);
router.put('/message/:id', MessageCtrl.updateMessage)
router.delete('/message/:id', MessageCtrl.deleteMessage)
router.get('/message/:id', MessageCtrl.getMessageById)
router.get('/messages', MessageCtrl.getMessages)

module.exports = router