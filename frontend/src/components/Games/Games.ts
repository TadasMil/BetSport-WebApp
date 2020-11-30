import { IGameType } from "../../Interfaces/IGameType";

export const gameTypes: IGameType[] = [
  {
    id: 1,
    name: "Machine Slot",
    image: process.env.PUBLIC_URL + "./images/games/game1.png",
    description:
      "Suk mašiną ir laimėk begales pinigų! Sukimų kreditą gali pasirinkti sau pageidautiną! Prizai tavęs nelauks.",
  },
  {
    id: 2,
    name: "5 iš 35",
    image: process.env.PUBLIC_URL + "./images/games/game2.png",
    description:
      "Atspėk kamuoliukus ir nusinešk didžiausias istorijos sumas! Nesnausk.",
  },
  {
    id: 3,
    name: "2 iš 15",
    image: process.env.PUBLIC_URL + "./images/games/game3.png",
    description:
      "Atspėk kamuoliukus ir nusinešk didžiausias istorijos sumas! Nesnausk.",
  },
];
