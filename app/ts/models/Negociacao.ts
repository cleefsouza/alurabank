// app/ts/models/Negociacao.ts

class Negociacao {

    /**
     * @param _data 
     * @param _quantidade 
     * @param _valor 
     */
    constructor(private _data: Date, private _quantidade: number, private _valor: number) {
    }

    get data() {
        return this._data;
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

    get volume() {
        return this._quantidade * this._valor;
    }
}
