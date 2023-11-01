const express = require('express')
const app = express()
const {authPage,authStudent} = require('./middleware')


app.use(express.json())

app.get('/',(req,res)=>{
    res.json('Home Page')
})

app.get('/class/students',authPage(['admin', 'hod']), (req,res)=>{
    res.json({
        Anbu: 101,
        Balu: 102,
        Deva: 103,
        Makesh: 104
    });
})

app.get('/class/:number', (req,res)=>{
    const studentNumber = req.params.number
    res.json(`Your Student ID ${studentNumber}`)
})

app.listen(3000, ()=>{
    console.log('Server running in PORT 3000');
})