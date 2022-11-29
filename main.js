//bringing in the express library
let express = require("express");

let app = express()
//this is just a variable holding a number
let PORT = 7676;



app.get("/add" , function(req, res){
    let num1 = parseInt(req.query.num1);
    let num2 = parseInt(req.query.num2);
    let sum = num1+num2;
    res.json(sum);
})


app.post("/mutiply", function(req, res){
    let num1 = req.body.num1;
    let num2 = req.body.num2;
    let product = num1 * num2;
    res.json(product);
})

app.put("/reciprocal/:num", function (req, res){
    let num = req.params.num;
    let product = 1/num;
    res.json(product);
})

app.listen(PORT, function(){
    console.log("application started on port ", PORT);
})
