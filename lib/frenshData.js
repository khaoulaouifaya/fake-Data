// Liste des prénoms
var firstNames = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
    "Kate", "Liam", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Ryan", "Sophia", "Thomas"
  ];
  
  function generateRandomId() {
    const characters = '012xy345a6789';
    let randomId = '';
  
    for (let i = 0; i < 3; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomId += characters.charAt(randomIndex);
    }
  
    return randomId;
  }

  var addresses = [
    '123 Rue de la Paix, Paris, Île-de-France, 75001',
    '456 Avenue des Champs-Élysées, Lyon, Auvergne-Rhône-Alpes, 69002',
    '789 Boulevard Saint-Michel, Marseille, Provence-Alpes-Côte d\'Azur, 13006',
    '987 Rue du Faubourg Saint-Antoine, Toulouse, Occitanie, 31000',
    '321 Avenue de la Libération, Nice, Provence-Alpes-Côte d\'Azur, 06000',
    '654 Boulevard Haussmann, Bordeaux, Nouvelle-Aquitaine, 33000',
    '876 Rue de la République, Lille, Hauts-de-France, 59000',
    '234 Quai des Chartrons, Nantes, Pays de la Loire, 44000',
    '567 Place Bellecour, Strasbourg, Grand Est, 67000',
    '890 Rue de la Croix-Rousse, Rennes, Brittany, 35000',
    // Add more fake addresses as needed
  ];

  // Liste des noms de famille
  var lastNames = [
    "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
    "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson"
  ];
  
  var cities = [
    "Paris", "Marseille", "Lyon", "Toulouse", "Nice", "Nantes", "Strasbourg", "Montpellier", "Bordeaux", "Lille",
    "Rennes", "Reims", "Le Havre", "Saint-Étienne", "Toulon", "Grenoble", "Dijon", "Nîmes", "Angers", "Villeurbanne"
  ];

  function getFNames () {
    return firstNames;
  };

 function getLNames () {
  return lastNames;
};

 function getCities () {
  return cities;
};

function getAdresses () {
  return addresses;
};
module.exports = {generateRandomId,getFNames,getLNames,getCities,getAdresses};
  

  