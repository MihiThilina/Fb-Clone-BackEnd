const express = require('express')
const app = express()
const router = express.Router()

const Login = require('../model/login.model')

app.use(express.json())

router.post('/', async (req, res) => {
    // const { email, password: plainTextPassword } = req.body
    // if (!email || typeof email !== 'string') {
    //     return res.json({ status: 'error', error: 'Invalid Username' })
    // }
    // if (!password || typeof password !== 'string') {
    //     return res.json({ status: 'error', error: 'Invalid Password' })
    // }

    // if (password.length < 5) {
    //     return res.json({
    //         status: 'error',
    //         error: 'Password too small . should be atleast 6 characters'
    //     })
    // }

    const password = await bcrypt.hash(plainTextPassword, 10)
    try {
        const res = await Login.create({
            email:req.body.email,
            password:req.body.password
        })
        console.log('user Created successfully : ', res)
    } catch (error) {
        return res.json({ status: 'error' })
    }
})

module.exports = router