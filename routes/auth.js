const express = require('express')
const router = express.Router()
const db = require("../includes/auth")
const jwt = require('jsonwebtoken')
const { regDatSchema, logDatSchema } = require("../schemas/auth")

router.post('/reg', (req, res, next) => {

})

router.post('/log', (req, res, next) => {

})

router.post('/tok', (req, res, next) => {

})

module.exports = router