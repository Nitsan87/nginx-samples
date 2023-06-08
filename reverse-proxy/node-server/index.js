const express = require("express")
const app = express()

var os = require("os");
var hostname = os.hostname();

app.get("/", (req, res) => {
    res.send("App Is Running! " + hostname)
})

app.listen(5000, () =>{
    console.log("listening to port 5000")
})