const ar = require('./src/fakeDataAr')
const fr = require('./src/fakeDataFr')
const en = require('./src/fakeDataEn')

const frData= {
    id: fr.id(),
    name: fr.firstName(),
    lastname: fr.lastName(),
    city: fr.cities(),
    adress: fr.addresses()
  }

  const enData= {
    id: en.id(),
    name: en.firstName(),
    lastname: en.lastName(),
    city: en.cities(),
    adress: en.adresse(),
  }



  const ArData= {
    id: ar.id(),
    name: ar.firstName(),
    lastname: ar.lastName(),
    city: ar.cities(),
    adress: ar.addresses()
  }

  
  module.exports={frData,enData,ArData}

