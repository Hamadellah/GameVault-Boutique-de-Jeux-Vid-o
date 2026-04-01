export const games = [
  {
    id: 1,
    title: "Cyberpunk 2077",
    price: 59.99,
    category: "RPG",
    // Image de ville futuriste nÃ©on
    image:
      "https://cdn1.epicgames.com/offer/77f2b98e2cef40c8a7437518bf420e47/EGS_Cyberpunk2077PhantomLiberty_CDPROJEKTRED_DLC_S1_2560x1440-c62f1eb1498aaea2fc109b7aa50279a3?resize=1&w=480&h=270&quality=medium",
    description:
      "Plongez dans l'avenir sombre de Night City en tant que mercenaire hors-la-loi Ã  la recherche d'un implant unique.",
  },
  {
    id: 2,
    title: "Elden Ring",
    price: 49.99,
    category: "Action",
    // Image de chÃ¢teau/fantasy
    image:
      "https://external-game-cover-image-cf.store.on.epicgames.com/119133?resize=1&w=360&h=480&quality=medium",
    description:
      "Explorez l'Entre-terre, un vaste monde fantastique et devenez le prochain Seigneur d'Elden.",
  },
  {
    id: 3,
    title: "Modern Warfare III",
    price: 69.99,
    category: "FPS",
    // Image de soldat/Ã©quipement tactique
    image:
      "https://www.callofduty.com/content/dam/atvi/callofduty/cod-touchui/store/games/mw3/overview/Store_GamesPDP_Hero01.png?imwidth=1920",
    description:
      "Le combat contre la menace ultime continue dans cette expÃ©rience multijoueur lÃ©gendaire.",
  },
  {
    id: 4,
    title: "The Witcher 3",
    price: 29.99,
    category: "RPG",
    // Image de forÃªt/aventure
    image:
      "https://cdn1.epicgames.com/offer/14ee004dadc142faaaece5a6270fb628/EGS_TheWitcher3WildHuntCompleteEdition_CDPROJEKTRED_S2_1200x1600-53a8fb2c0201cd8aea410f2a049aba3f?resize=1&w=360&h=480&quality=medium",
    description:
      "Incarnez Geralt de Riv et parcourez un monde dÃ©vastÃ© par la guerre Ã  la recherche de Ciri.",
  },
  {
    id: 5,
    title: "FIFA 25",
    price: 79.99,
    category: "Sport",
    // Image de stade de foot
    image:
      "https://external-game-cover-image-cf.store.on.epicgames.com/314499?resize=1&w=360&h=480&quality=medium",
    description:
      "Vivez l'expÃ©rience de football la plus rÃ©aliste avec les plus grandes compÃ©titions mondiales.",
  },
  {
    id: 6,
    title: "Starfield",
    price: 55.0,
    category: "RPG",
    // Image de l'espace/astronaute
    image:
      "https://external-game-cover-image-cf.store.on.epicgames.com/96437?resize=1&w=360&h=480&quality=medium",
    description:
      "Explorez les Ã©toiles et dÃ©couvrez le plus grand mystÃ¨re de l'humanitÃ© dans ce RPG spatial.",
  },
  {
  id: 7,
  title: "Cyberpunk 2077",
  price: 45.0,
  category: "Action",
  image: "https://cdn1.epicgames.com/cyberpunk2077/cover.jpg",
  description: "Plongez dans un futur dystopique rempli de technologie et de chaos."
},
{
  id: 8,
  title: "The Legend of Zelda: Breath of the Wild",
  price: 60.0,
  category: "RPG",
  image: "https://cdn.nintendo.com/zelda-botw-cover.jpg",
  description: "Explorez Hyrule dans une aventure épique pleine de mystères et de liberté."
},
{
  id: 9,
  title: "Gran Turismo 7",
  price: 50.0,
  category: "Sport",
  image: "https://cdn.playstation.com/granturismo7-cover.jpg",
  description: "Vivez l’expérience ultime de course automobile avec des graphismes réalistes."
},
{
  id: 10,
  title: "Minecraft",
  price: 30.0,
  category: "RPG",
  image: "https://cdn.minecraft.net/minecraft-cover.jpg",
  description: "Construisez, explorez et survivez dans un monde infini de blocs."
},
{
  id: 11,
  title: "Fortnite",
  price: 0.0,
  category: "Action",
  image: "https://cdn.epicgames.com/fortnite-cover.jpg",
  description: "Affrontez vos adversaires dans le battle royale le plus populaire au monde."
},
{
  id: 12,
  title: "EA Sports FC 26",
  price: 59.99,
  category: "Sport",
  image: "https://cdn.ea.com/fc26-cover.jpg",
  description: "Le nouveau chapitre du football virtuel avec des modes réalistes et compétitifs."
},
{
  id: 13,
  title: "Assassin’s Creed Mirage",
  price: 55.0,
  category: "Action",
  image: "https://cdn.ubisoft.com/ac-mirage-cover.jpg",
  description: "Retour aux origines avec une aventure immersive dans Bagdad médiéval."
},
{
  id: 14,
  title: "Elden Ring",
  price: 49.99,
  category: "RPG",
  image: "https://cdn.bandainamco.com/eldenring-cover.jpg",
  description: "Un monde ouvert sombre et mystérieux créé par FromSoftware."
},

];
localStorage.setItem("games", JSON.stringify(games));