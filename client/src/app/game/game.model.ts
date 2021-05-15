interface GameJson {
    gameId: number,
    title: string,
    description: string,
    gameConsole: string,
    newPrice: number,
    usedPrice: number,
    newStock: number,
    usedStock: number;
}

export class Game {
    constructor(
        private _gameId: number,
        private _title: string, 
        private _description: string,
        private _gameConsole: string,
        private _newPrice: number,
        private _usedPrice: number,
        private _newStock: number,
        private _usedStock: number
    ) {}
  
    static fromJSON(json: GameJson): Game {
        const game = new Game(
            json.gameId,
            json.title,
            json.description,
            json.gameConsole,
            json.newPrice,
            json.usedPrice,
            json.newStock,
            json.usedStock);

        return game;
    }
    get gameId(): number {
        return this._gameId;
    }

    get title(): string {
        return this._title;
    }

    get description(): string {
        return this._description;
    }

    get gameConsole(): string {
        return this._gameConsole;
    }

    get newPrice(): number {
        return this._newPrice;
    }

    get usedPrice(): number {
        return this._usedPrice;
    }

    get newStock(): number {
        return this._newStock;
    }

    get usedStock(): number {
        return this._usedStock;
    }


}