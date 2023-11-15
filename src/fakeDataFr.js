const frenshData = require("../lib/frenshData");


const id = () => {
    const data = frenshData.generateRandomId();
   return data;
};

const firstName = () => {
    const data = frenshData.getFNames();
   const firstName = data[Math.floor(Math.random() * data.length)]
   return firstName;
};

const addresses = () => {
    const data = frenshData.getAdresses();
   const adresse = data[Math.floor(Math.random() * data.length)]
   return adresse;
};

const lastName = () => {
    const data = frenshData.getLNames();
   const lastName = data[Math.floor(Math.random() * data.length)]
   return lastName;
};


const cities = () => {
    var data = frenshData.getCities();
   const cities = data[Math.floor(Math.random() * data.length)]
   return cities;
};


module.exports = {id,firstName,lastName,cities,addresses};