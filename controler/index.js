const mahasiswa=require("./mahasiswa");
const autorization=require("./autorization/getToken");

const controler={};

controler.mahasiswa=mahasiswa;
controler.autorization=autorization;

module.exports=controler;