const express = require('express')
const app = express()
const mongoose = require('mongoose')
const UserModel = require('./models/users')
const cors = require('cors')

mongoose.connect(
    "mongodb+srv://abhinavashokm:55555abhi@cluster0.wntdcds.mongodb.net/MernApp?retryWrites=true&w=majority"
)

app.use(express.json())
app.use(cors())

app.get('/getUsers' , (req , res) => {
    UserModel.find({},(err , result) => {
        if(err){
            res.json(err)
        }else {
            res.json(result)
        }
    })
})
app.post('/createUser' , async (req, res ) => {
    const user = req.body
    const newUser = UserModel(user)
    await newUser.save()
    res.json(user)
})
app.listen(3001,() => {
    console.log('SERVER STARTED!')
})