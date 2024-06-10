import express from 'express';

const bodyParser = require('body-parser')

const app = express()
app.use(bodyParser.urlencoded({ extended: true }))
const port = 3000

const dummyUsers = [
    {
        id: 1,
        username: "alice",
        password: "pw1"
    },
    {
        id: 2,
        username: "bob",
        password: "pw2"
    },
]

app.get('/', (req,res) => {
    // res.send("Loginsuccessful")
    res.send("Loginsuccessful")
})


// CUREL REQUEST TO TEST

app.post('/login', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const user = dummyUsers.find(user => user.username === username && user.password === password)
    
    // more verbose version of the same code
    // function checkUserMatches(user) {
    // return user.username === username && user.password === password
    // }


    console.log("username", username)
    console.log("password", password)
})


app.listen( port, )