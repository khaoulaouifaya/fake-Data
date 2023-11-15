const englishData = require("../lib/englishData");

const firstName = () => {
    const data = englishData.getFNames();
   const firstName = data[Math.floor(Math.random() * data.length)]
   return firstName;
};
const id = () => {
    const data = englishData.generateRandomId();
   return data;
};
const lastName = () => {
    const data = englishData.getLNames();
   const lastName = data[Math.floor(Math.random() * data.length)]
   return lastName;
};


const cities = () => {
    var data = englishData.getCities();
   const cities = data[Math.floor(Math.random() * data.length)]
   return cities;
};

const adresse = () => {
    var data = englishData.getAdresses();
   const adress = data[Math.floor(Math.random() * data.length)]
   return adress;
};


module.exports = {id,firstName,lastName,cities,adresse};