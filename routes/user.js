const express = require('express')
const app = express()
const router = express.Router()


const User = require('../model/user.model')


app.use(express.json())

router.get('/', async (req, res) => {
   // res.send("awaaaaaaaaaaaa")
   try {
      const user = await User.find()
      res.json(user)
   } catch (err) {
      res.send('Err: ' + err)
   }
})

router.get('/:id', async (req, res) => {
   try {
      const user = await User.findById(req.params.id)
      res.json(user)
   } catch (err) {
      res.send('Err: ' + err)
   }
})

router.post('/', async (req, res) => {
   const user = new User({
      userID: req.body.userID,
      firstName: req.body.firstName,
      surename: req.body.surename,
      gender: req.body.gender,
      birthday: req.body.birthday,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email
   })

   try {
      const response = await user.save()
      res.json(response)
   } catch (err) {
      res.send('Err: ' + err)
   }
})

router.delete('/:id', async (req, res) => {
   try {
      const User = await User.findById(req.params.id)
      const response = await User.remove()
      res.json(response)
   } catch (err) {
      res.send('Err: ' + err)
   }
})

router.put('/:id', async (req, res) => {
   try {
      const User = await User.findById(req.params.id)
      User.userID = req.body.userID,
         User.firstName = req.body.firstName,
         User.surename = req.body.surename,
         User.gender = req.body.gender,
         User.birthday = req.body.birthday,
         User.password = req.body.password,
         User.phoneNumber = req.body.phoneNumber,
         User.email = req.body.email

      const response = await User.save()
      res.json(response)

   } catch (err) {
      res.send('Err: ' + err)
   }
})


module.exports = router