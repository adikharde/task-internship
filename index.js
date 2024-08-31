let express=require("express")
let mongoose=require("mongoose")
let bodyParser = require("body-parser")

let multer=require("multer")



let app=express()

app.use(bodyParser.json())
app.use(express.static("public"))
app.use(bodyParser.urlencoded({
    extended:true
}))
mongoose.connect("mongodb://127.0.0.1:27017/intern").then(()=>{
    console.log("Connection OK")
}).catch((err)=>{
    console.log(err)
})
let persch=new mongoose.Schema({
    "name":String,
    "email":String,
    "phno":Number,
    "password":String,
    "gender":String,
    "age":Number
    

})
let resultmodel=mongoose.model("result",persch)
app.use(express.json())
app.post("/signup",(req,res)=>{
    let result=new resultmodel(req.body)
    result.save().then(()=>{
       console.log("Registration Successfull")
    }).catch((err)=>{
        res.send(err)
    })
    return res.redirect("signupp_successful.html")
})






app.get("/",(req,res)=>{
    res.set({
        "Allow-access-Allow-Origin":"*"
    })
    return res.redirect('index.html')
}).listen(5000)



// app.listen(5500)