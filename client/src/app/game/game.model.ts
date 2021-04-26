interface GameJson {
    title: string,
    description: string,
    console: string,
    newPrice: number,
    usedPrice: number,
    newStock: number,
    usedStock: number;
}

export class Game {
    constructor(
        private _title: string, 
        private _description: string,
        private _console: string,
        private _newPrice: number,
        private _usedPrice: number,
        private _newStock: number,
        private _usedStock: number
    ) {}
  
    static fromJSON(jsonGame: any): Game {
        return new Game(
            jsonGame.title,
            jsonGame.description,
            jsonGame.console,
            jsonGame.newPrice,
            jsonGame.usedPrice,
            jsonGame.newStock,
            jsonGame.usedStock
        );
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