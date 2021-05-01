interface GameJson {
    gameId: number,
    title: string,
    description: string,
    console: number,
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
        private _console: string,
        private _newPrice: number,
        private _usedPrice: number,
        private _newStock: number,
        private _usedStock: number
    ) {}
  
    static fromJSON(json: GameJson): Game {
        let console;
        
        switch(json.console) {
            case 0: console = "Playstation 3";
                break;
            case 1: console = "Playstation 4";
                break;
            case 2: console = "Playstation 5";
                break;
            case 3: console = "Playstation Vita";
                break;
            case 4: console = "Xbox 360";
                break;
            case 5: console = "Xbox One";
                break;
            case 6: console = "Nintendo DS";
                break;
            case 7: console = "Nintendo 3DS";
                break;
            case 8: console = "Nintendo Switch";
                break;
            default: console = "Console not found"
                break;
        }

        const game = new Game(
            json.gameId,
            json.title,
            json.description,
            console,
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

    get console(): string {
        return this._console;
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