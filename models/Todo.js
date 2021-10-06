
// const {Datatypes} =  require("sequelize/types");
// const {sequelize} = require(".");
// const db=require("../database/mysql")
// const jurusanMahasiwa=require("./jurusanMahasiwa")

// const { DataTypes } = require("sequelize/types");
// const { sequelize } = require(".");

// var mahasiswa = sequelize.define("mahasiswa",
// {
//     nime:Sequelize.STRING,
//     nama:Sequelize.STRING,
//     jurusan:Sequelize.STRING,
//     poto:Sequelize.STRING,

// },{
//     freezeTableName:true, //ketika sequelize medefine table secara default akan di tambahkan s contah mahasiswa menjadi mahasiswas maka untuk menghindari itu perlu setup freezeTableName:true
//     timestamps:false // secara default sequelize akan memanggil fild create add dan update add karna di database kita belum ada paka kita setup timestamps ke false
// });

// // mahasiswa.hasOne(jurusanMahasiwa,{foreignKey: "jurusan"});
// // mahasiswa.belongsTo(jurusanMahasiwa,{foreignKey: "jurusan",targetKey: 'jurusan'},);

// mahasiswa.removeAttribute("id"); //secara default sequelize akan memanggil fild id tapi karna kita belum ada fild id di table mahasiswa kita remove dulu

module.exports = (sequelize,DataTypes)=>{

    const Todo = sequelize.define("Todo",
    {
        // nime:DataTypes.STRING,
        // nama:DataTypes.STRING,
        // jurusan:DataTypes.STRING,
        // poto:DataTypes.STRING,
    
        namawisata:{
            type:DataTypes.STRING,
            allowNull:true
        },
        pengelola:{
            type:DataTypes.STRING,
            allowNull:true
        },
        nomertelpon:{
            type:DataTypes.STRING,
            allowNull:true
        },
        nomerwatshap:{
            type:DataTypes.STRING,
            allowNull:true
        },
        email:{
            type:DataTypes.STRING,
            allowNull:true
        }

    
    },{
        // freezeTableName:true, //ketika sequelize medefine table secara default akan di tambahkan s contah mahasiswa menjadi mahasiswas maka untuk menghindari itu perlu setup freezeTableName:true
        // timestamps:false // secara default sequelize akan memanggil fild create add dan update add karna di database kita belum ada paka kita setup timestamps ke false
    });
    
    // mahasiswa.hasOne(jurusanMahasiwa,{foreignKey: "jurusan"});
    // mahasiswa.belongsTo(jurusanMahasiwa,{foreignKey: "jurusan",targetKey: 'jurusan'},);
    
    // Todo.removeAttribute("id"); //secara default sequelize akan memanggil fild id tapi karna kita belum ada fild id di table mahasiswa kita remove dulu
    
    return Todo;

}
// module.exports=masukanData;

// module.exports=(sequelize,DataTypes)=>{

//   const Todo = sequelize.define("Todo",
// {
//     // nime:DataTypes.STRING,
//     // nama:DataTypes.STRING,
//     // jurusan:DataTypes.STRING,
//     // poto:DataTypes.STRING,

//     Text:{
//         type:DataTypes.STRING,
//         allowNull:true
//     }

// },{
//     // freezeTableName:true, //ketika sequelize medefine table secara default akan di tambahkan s contah mahasiswa menjadi mahasiswas maka untuk menghindari itu perlu setup freezeTableName:true
//     // timestamps:false // secara default sequelize akan memanggil fild create add dan update add karna di database kita belum ada paka kita setup timestamps ke false
// });

// // mahasiswa.hasOne(jurusanMahasiwa,{foreignKey: "jurusan"});
// // mahasiswa.belongsTo(jurusanMahasiwa,{foreignKey: "jurusan",targetKey: 'jurusan'},);

// // Todo.removeAttribute("id"); //secara default sequelize akan memanggil fild id tapi karna kita belum ada fild id di table mahasiswa kita remove dulu

// return Todo;
// };