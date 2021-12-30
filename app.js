const express=require("express");
const app=express();
const morgan=require("morgan")
const path=require('path')
// const bodyParser=require("body-parser")


const mahasiswaroute=require("./routes/mahasiswa")
const autoriz=require("./routes/autorization")
const cors=require('cors')
app.use(cors({
    origin: "*"
}));

// const session = require('express-session');

// // sesion
// app.use(session({secret: 'ssshhhhh'}));
// =====

// =====using morgan to hanle consol view=======
// =====use body parser to hendle clien riques=======
// app.use(express.json())
// app.use(bodyParser.urlencoded({
//     extended:false,
// }));

// app.use(bodyParser.json());


app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'static')));

app.engine('ejs', require('ejs-locals'));
app.use(express.static(path.join(__dirname, 'static')));
app.set('view engine', 'ejs');


app.use(morgan('dev'))

app.use("/gettoken",autoriz);
app.use("/mahasiswa",mahasiswaroute);


// testing


// var url = req.protocol + '://' + req.get('host') + req.originalUrl;
// app.use("/", async (req, res, next) => {
//     let route, routesdataku = [];
//     app._router.stack.forEach(function(middleware){
//         if(middleware.route){ // routes registered directly on the app
//             routesdataku.push(middleware.route);
//         } else if(middleware.name === 'router'){ // router middleware 
//             middleware.handle.stack.forEach(function(handler){
//                 route = handler.route.path;
//                 // for(let i =0; 0 < route.legth; i++){
//                 //     console.log(route[i].Route.path);
//                 // }
//                 if(route != '/'){
//                   route && routesdataku.push(req.protocol+"://"+req.get('host')+"/"+"mhasiswa"+route); 
//                 }
//             });
//         }
//     });
//     // console.log(routesdataku);
//     let template = await res.render('admin/index',{message:"",url:routesdataku});

//     res.status(200)(
//         template
//     )

// });
// endtes







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


