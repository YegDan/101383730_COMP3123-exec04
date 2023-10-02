var express = require('express')

const SERVER_PORT = 8089
var app = express()

app.get("/hello", (req, res)=>{
    res.send("Hello Express JS")
})

//http://localhost:8089/user?fnm=venus&lnm=danesh
app.get("/user", (req, res)=>{
    const data = req.query
    if(data.fname == undefined || data.lname == undefined){
        res.send("fname and lname required as query params")
    }
    const user = {
        fname: data.fname,
        lname: data.lname,
        // method: "GET"
    }
    res.status(200).send(user)
})
app.post("/user/:fname/:lname",(req,res)=>{
    const data = req.params
    const user = {
        fname: data.fname,
        lname: data.lname,
        // method: "POST"
    }
    res.status(201).send(user)
})

app.listen(SERVER_PORT, ()=>{

    console.log(`Server running at http://localhost:${SERVER_PORT}`)
})
