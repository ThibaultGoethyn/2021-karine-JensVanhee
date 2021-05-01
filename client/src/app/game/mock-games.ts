import { Game } from './game.model';

const JsonGames = [
    {
        gameId: 0,
        title: 'Skate 3',
        description: 'Skate 3 is a skateboarding extreme sports game set in an open world environment and played from a third-person perspective. The game takes place in the fictional city of Port Carverton, which embraces skateboarding, unlike the "skateboarding is a crime" mentality portrayed in the second game.',
        console: 0,
        newPrice: 19.98,
        usedPrice: 9.98,
        newStock: 1,
        usedStock: 7
    },
    {
        gameId: 1,
        title: 'Call Of Duty Black Ops Cold War',
        description: 'Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ... Like Modern Warfare, Cold War also support cross-platform play and cross-platform progression.',
        console: 1,
        newPrice: 69.98,
        usedPrice: 54.98,
        newStock: 20,
        usedStock: 10
    },
    {
        gameId: 2,
        title: 'Pokémon Diamond',
        description: 'The game contains 107 new Pokémon and chronicles the adventures of a new Pokémon Trainer who strives to become the Pokémon League Champion, collecting and training various species of Pokémon along the way.',
        console: 6,
        newPrice: 79.98,
        usedPrice: 39.98,
        newStock: 1,
        usedStock: 8
    },
    {
        gameId: 3,
        title: 'Call Of Duty Black Ops Cold War',
        description: 'Call of Duty: Black Ops Cold War is set during the Cold War in the early 1980s. The story follows Green Beret turned CIA SAD/SOG operative Russell Adler and his mission to stop a USSR extremist group in 1981. ... Like Modern Warfare, Cold War also support cross-platform play and cross-platform progression.',
        console: 2,
        newPrice: 79.98,
        usedPrice: 69.98,
        newStock: 25,
        usedStock: 0
    }
];
export const GAMES: Game[] = JsonGames.map(Game.fromJSON);