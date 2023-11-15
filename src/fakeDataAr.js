const arabicData = require("../lib/arabicData");
const id = () => {
    const data = arabicData.generateRandomId();
   return data;
};
const firstName = () => {
    const data = arabicData.getFNames();
   const firstName = data[Math.floor(Math.random() * data.length)]
   return firstName.split('').reverse().join('');
};

const addresses = () => {
    const data = arabicData.getAdresses();
   const addresse = data[Math.floor(Math.random() * data.length)]
   return addresse.split('').reverse().join('');
};


const lastName = () => {
    const data = arabicData.getLNames();
   const lastName = data[Math.floor(Math.random() * data.length)]
   return lastName.split('').reverse().join('');
};


const cities = () => {
    var data = arabicData.getCities();
   const city = data[Math.floor(Math.random() * data.length)]
   return city.split('').reverse().join('');
};


module.exports = {id,firstName,lastName,cities,addresses};
