const express = require("express")
const userModel = require("./user-model")
const postRouter = require("../posts/post-router")
const db = require("../data/db-config")

const router = express.Router()

router.use("/:id/posts", postRouter)

router.get("/", async (req, res, next) => {
  try {
    res.json(await userModel.find())
  } catch(err) {
    next(err)
  }
})

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await userModel.findById(id)

    if (user) {
      res.json(user)
    } else {
      res.status(404).json({
        message: "Could not find user with given ID",
      })
    }
  } catch(err) {
    next(err)
  }
})

router.post("/", async (req, res, next) => {
  try {
    const newUser = await userModel.add(req.body)
    res.status(201).json(newUser)
  } catch(err) {
    next(err)
  }
})

router.put("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const user = await userModel.update(id, req.body)

    if (user) {
      res.json(user)
    } else {
      res.status(404).json({
        message: "Could not find user with given ID",
      })
    }
  } catch(err) {
    next(err)
  }
})

router.delete("/:id", async (req, res, next) => {
  try {
    const { id } = req.params
    const deletedCount = await userModel.remove(id)

    if (deletedCount) {
      res.status(204).end()
    } else {
      res.status(404).json({
        message: "Could not find user with given ID",
      })
    }
  } catch(err) {
    next(err)
  }
})

module.exports = router