const express=require("express");
const app=express();
const morgan=require("morgan")

const bodyParser=require("body-parser")
const mahasiswaroute=require("./routes/mahasiswa")
const cors=require('cors')
app.use(cors({
    origin: "*"
}));

// =====using morgan to hanle consol view=======
// =====use body parser to hendle clien riques=======
// app.use(express.json())
app.use(bodyParser.urlencoded({
    extended:false,
}));

app.use(bodyParser.json());


app.use(morgan('dev'))


app.use("/mahasiswa",mahasiswaroute);

// ===== hendling error ======
app.use((req, res, next) => {
    const error=new Error("Tidak ditemukan");
    error.status = 404;
    next(error);
})

app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({
        error:{
            message:error.message,
            status:error.status
        }
    })
})

// =======================

module.exports=app;


