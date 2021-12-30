const mahasiswa=require("./mahasiswa");
const login_and_register=require("./login_and_register");
const dasboard=require("./dasboard");
const autorization=require("./autorization/getToken");

const controler={};

controler.mahasiswa=mahasiswa;
controler.dasboard=dasboard;
controler.login_and_register=login_and_register;
controler.autorization=autorization;

module.exports=controler;