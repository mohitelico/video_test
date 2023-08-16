const express=require('express')
const cors=require('cors')
const {v4:uuidV4}=require('uuid')
const {PeerServer}=require('peer')
const fs=require('fs')
const path=require('path')
const http=require('http')


const app=express()
app.use(cors())

app.set('view engine','ejs')
app.use(express.static('public'))

const port=process.env.PORT||3000

const server=http.createServer(app)
const io=require('socket.io')(server)





app.get("/",(req,res)=>{
    res.redirect(`/${uuidV4()}`)
})

app.get("/:room",(req,res)=>{
    res.render('room',{roomId:req.params.room})
})


app.listen(port,()=>{
    console.log("server is ruuning")
})
