const express = require('express')

const AllotmentCtrl = require('../controllers/allotment-ctrl.js')

const router = express.Router()

router.post('/allotment', AllotmentCtrl.createAllotment)
router.put('/allotment/:id', AllotmentCtrl.updateAllotment)
router.delete('/allotment/:id', AllotmentCtrl.deleteAllotment)
router.get('/allotment/:id', AllotmentCtrl.getAllotmentById)
router.get('/allotments', AllotmentCtrl.getAllotments)

module.exports = router