export const locations = [
  {
    name: "town square",
    buttonText: [
      "Go to market",
      "Go to the notice board",
      "Go to the Rogue's alley",
      "Go to cave",
      "Fight the dragon",
    ],
    buttonFunctions: ["goStore", "goBoard", "goAlley", "goCave", "fightDragon"],
    text: "You step into the bustling Town Square, where life is in full motion, Merchants call out their wares, colorfull banners flutter in the breeze, and the scent of fresh bread and spices fills the air. What do you want to explore? ",

    sound: "/sounds/town.mp3",
    icon: [
      "/icons/bag.png",
      "/icons/board-icon.png",
      "/icons/alley.png",
      "/icons/cave.png",

      "/icons/dragon.png",
    ],
    image: "/images/town.png",
  },
  {
    name: "The market",
    buttonText: ["Buy 10 health", "Buy weapon", "Go to town square"],
    buttonFunctions: ["buyHealth", "buyWeapon", "goTown"],
    text: "You enter the market.",
    sound: "/sounds/market.mp3",
    icon: ["/icons/health.png", "/icons/sword.png", "/icons/town.png"],
    image: "/images/market.png",
  },
  {
    name: "cave",
    buttonText: ["Fight slime", "Fight fanged beast", "Run"],
    buttonFunctions: ["fightSlime", "fightBeast", "run"],
    text: "You enter the cave. You see some monsters.",
    sound: "/sounds/cave-monster.mp3",
    icon: ["/icons/slime.png", "/icons/werewolf.png", "/icons/run.png"],
    image: "/images/cave.jpg",
  },
  {
    name: "fight",
    buttonText: ["Attack", "Dodge", "Run"],
    buttonFunctions: ["attack", "dodge", "run"],
    text: "You are fighting a monster.",
    sound: "/sounds/dragon-roar.mp3",
    icon: ["/icons/swords.png", "/icons/dodge.png", "/icons/run.png"],
    image: "/images/dragon.jpg",
  },
];
