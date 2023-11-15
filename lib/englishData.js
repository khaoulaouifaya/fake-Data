const  firstNames = [
    "Alice", "Bob", "Charlie", "David", "Emma", "Frank", "Grace", "Henry", "Ivy", "Jack",
    "Kate", "Liam", "Mia", "Noah", "Olivia", "Paul", "Quinn", "Ryan", "Sophia", "Thomas",
    "Uma", "Victoria", "William", "Xander", "Yasmine", "Zachary", "Amelia", "Benjamin", "Chloe",
    "Daniel", "Ella", "Finn", "Gabriella", "Harrison", "Isabella", "Jacob", "Katherine", "Leo",
    "Madison", "Nathan", "Oliver", "Penelope", "Quincy", "Rebecca", "Samuel", "Trinity", "Ulysses",
    "Violet", "Winston", "Ximena", "Yara", "Zane", "Ava", "Bryan", "Cora", "Dylan", "Eva",
    "Freya", "George", "Hazel", "Isaac", "Jasmine", "Kai", "Lucy", "Max", "Nora", "Oscar",
    "Poppy", "Quentin", "Rose", "Sebastian", "Tessa", "Uriel", "Vivian", "Wyatt", "Xenia", "Yvonne",
    "Zara"
];

const lastNames = [
  "Smith", "Johnson", "Williams", "Jones", "Brown", "Davis", "Miller", "Wilson", "Moore", "Taylor",
  "Anderson", "Thomas", "Jackson", "White", "Harris", "Martin", "Thompson", "Garcia", "Martinez", "Robinson",
  "Clark", "Rodriguez", "Lewis", "Lee", "Walker", "Hall", "Allen", "Young", "Hernandez", "King",
  "Wright", "Lopez", "Hill", "Scott", "Green", "Adams", "Baker", "Nelson", "Carter", "Mitchell",
  "Perez", "Roberts", "Turner", "Phillips", "Campbell", "Parker", "Evans", "Edwards", "Collins", "Stewart",
  "Sanchez", "Morris", "Rogers", "Reed", "Cook", "Morgan", "Bell", "Murphy", "Bailey", "Rivera",
  "Cooper", "Richardson", "Cox", "Howard", "Ward", "Torres", "Peterson", "Gray", "Ramirez", "James",
  "Watson", "Brooks", "Kelly", "Sanders", "Price", "Bennett", "Wood", "Barnes", "Ross", "Henderson",
  "Coleman", "Jenkins", "Perry", "Powell", "Long", "Patterson", "Hughes", "Flores", "Washington", "Butler",
  "Simmons", "Foster", "Gonzalez", "Bryant", "Alexander", "Russell", "Griffin", "Diaz", "Hayes", "Myers",
  "Ford", "Hamilton", "Graham", "Sullivan", "Wallace", "Woods", "Cole", "West", "Jordan", "Owens"
];

const cities = [
  "New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio",
  "San Diego", "Dallas", "San Jose", "Austin", "Jacksonville", "San Francisco", "Indianapolis",
  "Columbus", "Fort Worth", "Charlotte", "Seattle", "Denver", "El Paso", "Detroit", "Washington",
  "Boston", "Memphis", "Nashville", "Portland", "Oklahoma City", "Las Vegas", "Baltimore", "Louisville",
  "Milwaukee", "Albuquerque", "Tucson", "Fresno", "Sacramento", "Kansas City", "Long Beach", "Mesa",
  "Atlanta", "Colorado Springs", "Omaha", "Raleigh", "Miami", "Oakland", "Minneapolis", "Tulsa",
  "Cleveland", "Wichita", "Arlington", "New Orleans", "Bakersfield", "Tampa", "Honolulu", "Aurora",
  "Anaheim", "Santa Ana", "St. Louis", "Riverside", "Corpus Christi", "Lexington", "Pittsburgh", "Anchorage",
  "Stockton", "Cincinnati", "St. Paul", "Toledo", "Greensboro", "Newark", "Plano", "Henderson", "Lincoln",
  "Buffalo", "Fort Wayne", "Jersey City", "Chula Vista", "Orlando", "St. Petersburg", "Norfolk", "Chandler",
  "Laredo", "Madison", "Durham", "Lubbock", "Winston-Salem", "Garland", "Glendale", "Hialeah", "Reno",
  "Baton Rouge", "Irvine", "Chesapeake", "Irving", "Scottsdale", "North Las Vegas", "Fremont", "Gilbert",
  "San Bernardino", "Boise", "Birmingham", "Rochester", "Richmond", "Spokane", "Des Moines", "Montgomery",
  "Modesto", "Fayetteville", "Tacoma", "Shreveport", "Fontana", "Oxnard", "Arlington", "Dayton", "Huntsville"
];
const addresses = [
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
function generateRandomId() {
  const characters = 'z0123456789';
  let randomId = '';

  for (let i = 0; i < 2; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomId += characters.charAt(randomIndex);
  }
  return randomId;
}

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