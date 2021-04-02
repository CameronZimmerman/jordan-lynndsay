const { Router } = require('express')
const Url = require('../models/Url.js')

module.exports = Router()
  .get('/', async (req, res, next) => {
    let urls = await Url.get()
    res.json(urls)
  })
  .post('/', async (req, res, next) => {
    try {
      let url = await Url.insert(req.body)
      res.json(url)
    }
    catch(err) {
      next(err)
    }
  })
  .put('/:id', async (req, res, next) => {
    try {
      let url = await Url.update(req.body, Number(req.params.id))
      res.json(url)
    }
    catch(err) {
      next(err)
    }
  })
  .delete('/:id', async (req, res, next) => {
    try {
      await Url.delete(req.body, Number(req.params.id))
      res.json(`url of id ${req.params.id} was deleted`)
    }
    catch(err) {
      next(err)
    }
  })