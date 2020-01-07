const express = require('express')
const router = express.Router({ mergeParams: true })

const db = require("../data/db-config")


router.get("/", async (req, res, next) => {
  try {
    const { id } = req.params
    const posts = await postModel.find(id)

    res.json(posts)
    
  } catch (error) {
    next(error)
  }
})

module.exports = router;